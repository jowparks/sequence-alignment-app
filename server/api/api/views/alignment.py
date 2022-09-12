from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiResponse

from ..models import Alignment, Genome
from ..sequence_search.search_genes import find_sequence_in_genomes
from ..serializers.alignment import AlignmentSerializer


class AlignmentViewSet(viewsets.ModelViewSet):
    """
    Alignments.
    ---
    search:
        omit_serializer: true
        parameters:
            - name: name
              description: article title
    get_price:


    """
    serializer_class = AlignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Alignment.objects.filter(author=user)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    @extend_schema(
        # extra parameters added to the schema
        parameters=[
            OpenApiParameter(name='sequence', description='DNA Sequence to search for', required=True, type=str),
            OpenApiParameter(
                name='genomes',
                type={'type': 'array', 'minItems': 1, 'items': {'type': 'string'}},
                location=OpenApiParameter.QUERY,
                description='Search for DNA sequence in a set of genome accession ids',
            ),
        ],
        responses={
            201: OpenApiResponse(response=AlignmentSerializer,
                                 description='Created new alignment search request'),
            400: OpenApiResponse(description='Bad request (something invalid)'),
        },
    )
    @action(detail=False, methods=['GET'], name='Search for sequence in a list of genome accession ids')
    def search(self, request, *args, **kwargs):
        search_sequence = request.query_params.get('sequence')
        genome_accessions = request.query_params.getlist('genomes')
        alignment = Alignment(search_sequence=search_sequence, author=self.request.user)
        alignment.save()
        print(f"Searching sequence: '{search_sequence}' in genomes:{genome_accessions}")
        genomes = []
        # Inefficient ORM calls and could be async task assembling genomes, but not worth optimizing right now
        for accession in genome_accessions:
            genome, _ = Genome.objects.get_or_create(accession=accession)
            genomes.append(genome)
            alignment.search_genomes.add(genome)
        alignment.save()

        genes = find_sequence_in_genomes(search_sequence, genomes)
        for gene in genes:
            alignment.matched_genes.add(gene)
        alignment.save()
        serializer = self.get_serializer(alignment)
        return Response(serializer.data)
    # @action(detail=False, methods=['GET'], name='Search for sequence in a list of genome accession ids')
    # def search(self, request, *args, **kwargs):
    #     queryset = search_
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)

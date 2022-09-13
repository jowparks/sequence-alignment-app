from rest_framework import serializers

from .gene import GeneSerializer
from .genome import GenomeSerializer
from ..models import Alignment


class AlignmentSerializer(serializers.ModelSerializer):
    matched_genes = GeneSerializer(many=True, read_only=True)
    search_genomes = GenomeSerializer(many=True, read_only=True)
    class Meta:
        model = Alignment
        fields = ('id', 'search_sequence', 'search_genomes', 'status', 'matched_genes')

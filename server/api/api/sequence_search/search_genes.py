from typing import List

from ..models import Gene, Genome


def find_sequence_in_genomes(sequence: str, genomes: List[Genome]) -> List[Gene]:
    genes = []
    for genome in genomes:
        genes.extend(
            find_sequence_in_genes(sequence, Gene.objects.filter(genome__accession=genome.accession))
        )
    return genes


def find_sequence_in_genes(sequence: str, genes: List[Gene]) -> List[Gene]:
    """
    Plain old sequence searching directly in list of genes. A different method could be used to do actual
    sequence alignment, but the problem doesn't ask for this.
    """
    return_genes = []
    for gene in genes:
        if sequence in gene.sequence:
            return_genes.append(gene)
    return return_genes

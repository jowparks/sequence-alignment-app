import dataclasses
import re
from typing import List

from Bio import Entrez


@dataclasses.dataclass
class Gene:
    sequence: str
    name: str
    protein: str
    db_xref: str
    protein_id: str


def get_genes_for_organism(accession_number: str) -> List[Gene]:
    # example genome accession number "NC_000852"
    handle = Entrez.efetch(db="nuccore", id=accession_number, rettype="fasta_cds_na")
    data = handle.read().split('>')
    genes = []
    for gene_data in data:
        if not gene_data:
            continue
        sequence = ''.join(gene_data.split('\n')[1:])
        name = re.search('\[gene=([^\]]+)]', gene_data).group(1)
        protein = re.search('\[protein=([^\]]+)]', gene_data).group(1)
        db_xref = re.search('\[db_xref=([^\]]+)]', gene_data).group(1)
        protein_id = re.search('\[protein_id=([^\]]+)]', gene_data).group(1)
        gene = Gene(sequence, name, protein, db_xref, protein_id)
        genes.append(gene)
    return genes

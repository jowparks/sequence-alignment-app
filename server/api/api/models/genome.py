import re
from typing import List

from Bio import Entrez
from django.db import models, transaction
from .gene import Gene


class Genome(models.Model):
    accession = models.CharField(max_length=50, help_text="e.g. NC_000852")

    def create_genes_for_genome(self) -> List[Gene]:
        handle = Entrez.efetch(db="nuccore", id=self.accession, rettype="fasta_cds_na")
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
            gene = Gene(sequence=sequence, name=name, protein=protein, db_xref=db_xref, protein_id=protein_id,
                        genome=self)
            gene.save()
            genes.append(gene)
        return genes

    @transaction.atomic
    def save(self, *args, **kwargs):
        first = not self.pk
        super(Genome, self).save(*args, **kwargs)
        if first:
            self.create_genes_for_genome()

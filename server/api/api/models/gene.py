
from django.db import models


class Gene(models.Model):
    genome = models.ForeignKey('Genome', on_delete=models.DO_NOTHING)
    sequence = models.TextField(help_text="e.g. AACGGAATACCAGAGAG")
    name = models.TextField(help_text='e.g. a001L')
    protein = models.TextField(help_text='e.g. hypothetical protein')
    db_xref = models.TextField(help_text="e.g. GeneID:918202")
    protein_id = models.TextField(help_text="NP_048349.1'")

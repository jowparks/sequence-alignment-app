
from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

from .gene import Gene
from .genome import Genome


class Alignment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Status(models.TextChoices):
        created = 'created', _('Created')
        running = 'running', _('Running')
        success = 'success', _('Success')
        failure = 'failure', _('Failure')

    status = models.CharField(
        max_length=15,
        choices=Status.choices,
        default=Status.created,
    )
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    search_sequence = models.CharField(max_length=50, help_text="DNA sequence that you want to align")
    search_genomes = models.ManyToManyField(Genome)
    matched_genes = models.ManyToManyField(Gene)



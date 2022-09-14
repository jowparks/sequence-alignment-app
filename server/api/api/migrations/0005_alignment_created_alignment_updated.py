# Generated by Django 4.1.1 on 2022-09-13 17:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_genome_alter_alignment_search_sequence_gene_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="alignment",
            name="created",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="alignment",
            name="updated",
            field=models.DateTimeField(auto_now=True),
        ),
    ]

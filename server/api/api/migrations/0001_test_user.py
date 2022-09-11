# Generated by Django 4.1.1 on 2022-09-11 16:38

from django.db import migrations


def forwards(apps, schema_editor):
    apps.get_model('auth', 'User').objects.create_user(username='test', password='test')


class Migration(migrations.Migration):

    dependencies = [
        # Dependencies to other migrations
    ]

    operations = [
        migrations.RunPython(forwards),
    ]
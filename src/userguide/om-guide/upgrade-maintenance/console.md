# Console

The Console supports online upgrades with a smooth process. Configuration files and data are preserved, making it suitable for routine version maintenance, feature enhancements, and issue fixes, ensuring continuous and stable system operation.

## Upgrade Preparation

Before starting, please contact your project manager or sales representative to obtain the latest installation package for the upgrade.

* Upload the installation package to the server

* Extract it to the specified directory, for example:

```plain
tar zxvf <update-package>.tar.gz -C /path/to/extract
```

## Upgrade Operation

* Run the upgrade command. The system will automatically load the update content into the running directory `/opt/installer/production/venvs`:

```plain
hmctl upgrade /<path-to-extracted-package>/installer/venvs
```
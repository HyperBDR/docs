# Domain Access Standalone HyperBDR Change Guide

## 1. Upload the certificate file to HyperBDR server

Upload the prepared certificate file to the HyperBDR server.

![](./images/domain-access-standalone-hyperbdr-change-guide-1.png) 

## 2. Merge  Certificate Files 

> If the prepared certificate file is in pem format, this step is not required; skip to operation step 3.

- The prepared domain name CRT certificate and CA's CRT certificate need to be merged into a PEM format file.

![](./images/domain-access-standalone-hyperbdr-change-guide-1.png) 

Merge the two CRT certificate files into PEM in the order of the domain name CRT certificate and the CA's CRT certificate.

``` shell
# example: new_domain.crt is the domain name CRT certificate, new_domainCA.crt is the CA  CRT certificate
cat new_domain.crt new_domainCA.crt > new_domain.pem
chmod 644 new_domain.pem
chmod 644 new_domain.key
```

## 3. Replace Certificate 

Back up the original certificate file 

``` shell
cd /opt/installer/production/venvs/newmuse-venv/project_etc/newmuse
mv oneprocloud.key oneprocloud.key.bak
mv oneprocloud.pem oneprocloud.pem.bak
```

Copy and replace the key file and pem file

``` shell
cp /root/certificate_files/new_domain.key /opt/installer/production/venvs/newmuse-venv/project_etc/newmuse/oneprocloud.key
cp /root/certificate_files/new_domain.pem /opt/installer/production/venvs/newmuse-venv/project_etc/newmuse/oneprocloud.pem
```

## 4. Modify the configuration file

Modify nginx configuration.
Replace the default configured **hypermotion.oneprocloud.com** domain name with the domain name used in the certificate.

``` shell
# testdomain.com is the real domain name that needs to be replaced
sed -i 's/hypermotion.oneprocloud.com/testdomain.com/g' /opt/installer/production/venvs/newmuse-venv/project_etc/nginx.conf
```

Modify the docker-compose configuration.

``` shell
sed -i 's/10443/443/g' /opt/installer/production/docker-compose-hyperbdr.yml
```

## 5. Restart Container

``` shell
docker restart production_newmuse_1
```

## 6. Domain Access Verification
Access the HyperBDR console using the domain name address in the browser
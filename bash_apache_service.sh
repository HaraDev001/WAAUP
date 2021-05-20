#!/bin/sh
sudo cp /root/hosts-temp /etc/hosts
sudo systemctl restart apache2

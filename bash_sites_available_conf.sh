#!/bin/sh
sudo touch /etc/apache2/sites-available/waaupsite.conf
sudo chmod 777 /etc/apache2/sites-available/waaupsite.conf
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/waaupsite.conf
sudo touch /root/hosts-temp
sudo chmod 777 /root/hosts-temp
sudo cp /etc/hosts /root/hosts-temp

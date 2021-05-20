<?php
    header('Access-Control-Allow-Origin: *');

    use Symfony\Component\Process\Process;

    function SetDomainNameCommand($domain_name, $ip_server){
        //======= Linux ==========//
        shell_exec('sudo chmod -R 777 /etc/nginx/conf.d');

        $filename = "/etc/nginx/conf.d/default.conf";

        $domain_name = str_replace('www.', '', $domain_name);
        $txt  =  'server {'.PHP_EOL;
        $txt .=  'listen 80 default_server;'.PHP_EOL;
        $txt .=  'server_name _;'.PHP_EOL;
        $txt .=  'return 403;'.PHP_EOL;
        $txt .=  '}'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  'server {'.PHP_EOL;
        $txt .=  '    listen       80;'.PHP_EOL;
        $txt .=  '    server_name  '.$domain_name.' '.$ip_server.';'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    #charset koi8-r;'.PHP_EOL;
        $txt .=  '    #access_log  /var/log/nginx/host.access.log  main;'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    location / {'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '        root   /var/www/html/waaup/current/public;'.PHP_EOL;
        $txt .=  '#	      root   /var/www/html;'.PHP_EOL;
        $txt .=  '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .=  '     	  try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    #error_page  404              /404.html;'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # redirect server error pages to the static page /50x.html'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .=  '    location = /50x.html {'.PHP_EOL;
        $txt .=  '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # proxy the PHP scripts to Apache listening on 127.0.0.1:80'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    #location ~ \.php$ {'.PHP_EOL;
        $txt .=  '    #    proxy_pass   http://127.0.0.1;'.PHP_EOL;
        $txt .=  '    #}'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    location ~ \.php$ {'.PHP_EOL;
        $txt .=  '        root   /var/www/html/waaup/current/public;'.PHP_EOL;
        $txt .=  '#	      root   /var/www/html;'.PHP_EOL;
        $txt .=  '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .=  '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .=  '        #fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;'.PHP_EOL;
        $txt .=  '	      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .=  '        include        fastcgi_params;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # deny access to .htaccess files, if Apache’s document root'.PHP_EOL;
        $txt .=  '    # concurs with nginx’s one'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    #location ~ /\.ht {'.PHP_EOL;
        $txt .=  '    #    deny  all;'.PHP_EOL;
        $txt .=  '    #}'.PHP_EOL;
        $txt .=  '}'.PHP_EOL;

        $txt .=  'server {'.PHP_EOL;
        $txt .=  '    listen       80;'.PHP_EOL;
        $txt .=  '    server_name  www.'.$domain_name.' '.$ip_server.';'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    #charset koi8-r;'.PHP_EOL;
        $txt .=  '    #access_log  /var/log/nginx/host.access.log  main;'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    location / {'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '        root   /var/www/html/waaup/current/public;'.PHP_EOL;
        $txt .=  '#	      root   /var/www/html;'.PHP_EOL;
        $txt .=  '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .=  '     	  try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    #error_page  404              /404.html;'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # redirect server error pages to the static page /50x.html'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .=  '    location = /50x.html {'.PHP_EOL;
        $txt .=  '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # proxy the PHP scripts to Apache listening on 127.0.0.1:80'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    #location ~ \.php$ {'.PHP_EOL;
        $txt .=  '    #    proxy_pass   http://127.0.0.1;'.PHP_EOL;
        $txt .=  '    #}'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    location ~ \.php$ {'.PHP_EOL;
        $txt .=  '        root   /var/www/html/waaup/current/public;'.PHP_EOL;
        $txt .=  '#	      root   /var/www/html;'.PHP_EOL;
        $txt .=  '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .=  '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .=  '        #fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;'.PHP_EOL;
        $txt .=  '	      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .=  '        include        fastcgi_params;'.PHP_EOL;
        $txt .=  '    }'.PHP_EOL;
        $txt .=  ''.PHP_EOL;
        $txt .=  '    # deny access to .htaccess files, if Apache’s document root'.PHP_EOL;
        $txt .=  '    # concurs with nginx’s one'.PHP_EOL;
        $txt .=  '    #'.PHP_EOL;
        $txt .=  '    #location ~ /\.ht {'.PHP_EOL;
        $txt .=  '    #    deny  all;'.PHP_EOL;
        $txt .=  '    #}'.PHP_EOL;
        $txt .=  '}'.PHP_EOL;

        $fp = fopen($filename, "w") or die("Unable to open file!");
        fwrite($fp, $txt);
        fclose($fp);

        shell_exec('sudo /etc/init.d/nginx reload');
        sleep(1);

        return true;
    }
?>

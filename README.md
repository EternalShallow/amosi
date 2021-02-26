# nuxt-example

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### 服务器打包之后的配置 （参考）

#### nuxt.js 服务端部署
>1，我会上传 .nuxt static .env.dev .env.prod nuxt.config.js package.json 这些文件

>2，安装node，一般node安装好之后，会有npm ，如果感觉npm资源很慢，可以执行下面这个命令：npm install -g cnpm --registry=https://registry.npm.taobao.org（推荐）

>3，进入根目录 ，执行 cnpm/npm install

>4,部署nginx 反向代理

```
upstream nodenuxt {
    server 127.0.0.1:3000; #nuxt项目 监听端口
    keepalive 64;
}

server {
    listen 80;
    server_name  www.171tiyu.com;
    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenuxt; #反向代理
    }
}
```
>5，在根目录执行npm run start 此时打开网址 就能够看到网站内容了

>6，但是根据第5步的操作，不能关闭命令行，关闭命令行网站就打不开了 所以需要做一个进程守护，官方推荐pm2

>7，如果使用pm2 需要在根目录下执行 pm2 start npm --name "sports-v-2" -- run start

### 注意点
>1.如果启用不了服务，有可能是启用ip的问题，nuxt默认启用的是127.0.0.1这个ip在本地没问题，但是在服务器上有可能就不太灵了，可以把ip换成0.0.0.0，这个ip会自动启用服务器真实ip。

>2.如果安装不了依赖，有可能是node版本问题，可以在服务器上通过node版本管理工具来切换node版本试试。

>3.这样部署的服务只能通过根域名来访问，既类似于127.0.0.1 类似于这样的访问路径，如果服务器根路径被占用的话就需要部署在二级路径，类似于 127.0.0.1/web/ 这样的访问方式，如果需要这样访问的话就需要在项目中配置baseurl

>[www.gxshuke.com](https://www.gxshuke.com) 这个是通过nuxt 方式部署的官网，点击可以查看详情






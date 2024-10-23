# 基础镜像
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

# 安装必要的工具和库
RUN apt-get update && apt-get install -y \
    unixodbc \
    unixodbc-dev \
    && rm -rf /var/lib/apt/lists/*

# 安装 Cloudera Impala ODBC 驱动程序
COPY ClouderaODBC.deb /tmp/
RUN dpkg -i /tmp/ClouderaODBC.deb || apt-get -y install -f \
    && rm /tmp/mypackage.deb

COPY odbc.ini /etc/
COPY odbcinst.ini /etc/

# 复制发布的项目文件
COPY ./publish ./

# 设置入口点
ENTRYPOINT ["dotnet", "UslimWeb.dll"]

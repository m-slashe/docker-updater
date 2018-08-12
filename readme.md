Para conectar via ssh do container para o host deve se usar

`route` Pegar o default

`ssh docker@{ipdefault}` senha: tcuser

Apenas a pasta Users do c vai estar disponivel

instalar sshpass para não perguntar da senha

`sshpass -p tcuser ssh docker@172.19.0.1`
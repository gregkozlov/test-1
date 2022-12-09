$array = @(Get-Childitem -Path . ) 
foreach ($item in $array){ aws --endpoint-url=https://storage.yandexcloud.net/ws-admin-fe-ci s3 cp $item s3://}

# index-dts

Библиотека генерации d.ts в один бандл.

Как это должно работать:

1. Генерация файлов происходит на основе tsc с созданием временной директории
2. Далее все файлы временной директории собираются в один бандл
3. После после этого создается alias для корневного index.js в d.ts

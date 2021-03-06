# Final project

## Описание проекта
Pokedex - web-приложение, с помощью которого можно просматривать информацию о покемонах, а также отмечать уже пойманных. 

## В процессе выполнения проекта были реализованы:

1. **Главная страница**, на которой находятся карточки покемонов с указанием их названий, типов и с интерактивными кнопками для поимки.
2. **Страница покемона**, которая содержит в себе карточку покемона с его ID, именем, типами и информацией о его поимке (датой поимки).
3. **Страница со всеми пойманными покемонами**, на которой отображаются покемоны, которые были помечены на главной странице как пойманные.

4. **Пагинация** была реализована с помощью Endless scroll, при прокрутке до конца страницы автоматически подгружаются новые карточки с покемонами.
5. **Адаптивный дизайн** был выполнен с помощью фреймворка Materialize CSS.
6. **Меню**, которое отображается в верхней части страницы.
7. **State Managment** с помощью Redux.

Для получения информации о покемонах были выполнены запросы к Poke API (https://pokeapi.co/)

## Чтобы запустить проект, необходимо:
1. Склонировать репозиторий
2. Выполнить npm install в папке pokedex
3. Выполнить npm start 
## Hello, fellas
Чё, пацаны, **НЕОМОРФИЗМ В 2022? НЕ ЖДАЛИ?** Чувствуете, да? Волна хайпа.<br/>
Что-то появляется в медиапространстве, проходит несколько лет **и вот он Я**.<br/>
Данное направление в дизайне почти сразу же зарекомендовало себя, как кринжовое.<br/>
А вебдизайнерам, которые работают в данном направлении, руку пожимать не принято - потом не отмоетесь.<br/>
Но, поскольку я настоящий панк, я захотел - я сделал.<br/>
А теперь любуйтесь скриншотами(на GitHub Pages почему-то не работает даже build версия) данного приложения в **4K Full HD**:

![Clear List](https://user-images.githubusercontent.com/30495597/170774921-27866157-1cf1-4d11-b8f0-73c7a3bbca55.png)
*Пустой лист и отрисованный по условию компонент с призывом к действию.*
***
![Full List](https://user-images.githubusercontent.com/30495597/170774952-2ac6815f-db23-4e02-90a3-336aa3140926.png)
*Заполненный лист, выполненные задачи которого перечеркнуты.*
***
Вышло весьма жиденько, согласен. А вы чего ожидали? Но, в принципе, мне нравится.<br/>
Можно потыкать, подёргать, поперетаскивать элементы, посмотреть на плавные анимации, позалипать.<br/>
Доделал бы до конца - цены бы не было.

## Библиотеки
- [Bootstrap](https://getbootstrap.com/);
- [React-Bootstrap](https://react-bootstrap.github.io/).

## Иконки
- [Font Awesome](https://fontawesome.com/search?s=solid%2Cbrands).

## Шрифты
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono).

## Чего нового попробовал
- Drag'n'Drop
```
Данная фича немного подпалила сидение моего кресла, поскольку изначальный мой подход был не совсем верным.
Я делал упор на собственную библиотеку UI компонентов и дизайн, что очень сильно меня запутало.
Я психанул и начал делать приложение заново с 0. В итоге у меня получилось. Правда сначала я словил баг,
который чистил под 0 весь лист, после перетаскивания элемента. Как оказалось, дело было в том, что я использовал
метод, который мутирует исходный массив, вместо того, чтобы возвращать новый. Потому setState и давал сбой.
В общем, работа над ошибками проведена, и теперь я понимаю, как порой тяжело без Redux,
хоть приложение весьма небольшое.
```
- throw new Exception
```
Исходя из своего 4-летнего опыта программирования на C#, я привык делать обработку исключений.
И здесь мне было весьма приятно применить свой опыт, для обработки получаемой строки из input
с помощью try catch, на наличие пустой строки, слишком длинной строки и подчистки лишних пробелов
с помощью метода trim.
Поскольку JavaScript динамически типизированный язык, методы могут обработать и выдать любой тип данных,
что не есть круто. Да, есть тест кейсы, но все-таки, привычнее работать с типизацией и тратить меньше времени
на покрытие каждой строчки кода тестами. Потому я обещаю себе, что после изучения Redux, сразу же подучу TypeScript.
```
- Динамические классы элементов, реализованные через массив
- Связь состояния checkbox и прилегающего к нему контента

## Пожелания на будущее
```
Из легенького:
  Немного доработать размеры элементов для смартфонов;
  Доработать дизайн, особенно украсить шапку;
  Сделать кастомный скроллбар;
  Сделать кастомный loader.
Потяжелее:
  Хотелось добавить возможность закреплять и редактировать todo, но я благополучно забил;
  Сделать распределение задач по дням, либо папкам, заодно сделать sidebar;
  Сделать авторизацию и подгрузку todo через API для каждого пользователя.
```

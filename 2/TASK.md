# JSX

В этом задании не будет визуальной составляющей. Задача заключается в том, что необходимо правильно написать функцию, возвращающую JSX.

## Задание

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами `title` и `text`, и возвращает JSX с подставленными значениями. Пример:

```js
import getCard from "./Card.jsx";

getCard({ title: "hi", text: "how are you?" });

// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>
```

Если `title` отсутствует, то соответствующая ему часть DOM не отрисовывается, то же самое справедливо и для `text`. Если отсутствуют оба свойства, то из функции необходимо вернуть `null`.

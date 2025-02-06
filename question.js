function questionASK(question, correct) {
  const number = prompt(question, ""); // Поле ввода. Вопрос  question
  if (Number(number) === correct) {
    // Number - преобразуем в числовой тип.  Если строго равно correct
    alert(` ${number} - Ваш ответ верен`);
    return true;
  } else {
    alert(` ${number} - Ваш ответ не верен. Правильный ответ ${correct} `);
    return false;
  }
}

function runTest() {
  // !questionASK ! - логический оператор отрицания. возвращает true если ответ правильный.
  // False если ответ неправильный
  if (!questionASK("В каком году началась разработка Java?", 1990)) {
    alert("Тест завершен, попробуйте снова");
  }

  if (!questionASK("Выпуск первой официальной версии Java 1.0 ?", 1996)) {
    alert("Тест завершен, попробуйте снова");
  }
}
runTest();

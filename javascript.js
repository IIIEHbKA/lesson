// Основы.
/* урок №5: write()
  document.write('<p>Эта строка <strong>\'js\'</strong></p>');
*/

/*Урок №6: Отлов ошибок.
 document.write('<p>Эта строка <strong>\'js\'</strong></p>;)
*/

/*Урок №7: Суть и создание переменных.
 Переменная- var price;

Значение - price = 500;

Переменная сразу со значением - var name = 'Иван';
*/

/* Урок №8: Использование переменных.
var price;
price = 500;
var name = 'Иван';
document.write(name);

price = 200;
*/

/*Урок №9: Имена для перменных.
1) Имя переменной может начинаться с буквы или с символа "$", либо с нижнего подчеркивания "_";
2) Нельзя использовать пробелы, тире, амперсанты, звездочки и т.п.
3) Имя переменной регистрозависимы;
4) Нельзя называть пеменную одним из зарезервированных слов:
 abstract
 boolean
 break
 byte
 case
 catch
 char
 class
 const
 continue
 default
 do
 double
 else
 extends
 false
 final
 finally
 float
 for
 function
 goto
 if
 implements
 import
 in
 instanceof
 int
 interface
 long
 native
 new
 null
 package
 private
 protected
 public
 return
 short
 static
 super
 switch
 synchronized
 this
 throw
 throws
 transient
 true
 try
 var
 void
 while
 with
*/

/* Урок №10: Операции над переменными.
var fam = 'Попов', name = ' Евгений ', otch = 'Валерьевич';
var fio = fam + name + otch;
// document.write(fio);
// Цифры пишуться без ковычек!!!
var myStreet = 'Ленина ', myNumderHouse = 34, myAddress;
// Слияие двух сторок - Конкатена́ция
myAddress = myStreet + myNumderHouse;
document.write(myAddress);
*/

/* Урок №11: Изменения значения переменных.constructor
var count = 32;
count = count + 16;

count -=16; - Уменьшение переменной на 16
count +=25; - Увеличение переменной на 25
count ++;   - Увеличение переменной на 1
count --;   - Уменьшение переменной на 1
count *=3   - Умножить переменную на 3
count /=3   - Разделить переменную на 3
document.write(count);
   */

/*
 Домашнее задание к 11-му уроку.

 Ваша задача состоит в том, чтобы создать четыре переменных (названия выбирайте на своё усмотрение).
 Первую - для хранения количества дней. Присвойте ей значение - 365. 
 Вторую - для  хранения названия нашей планеты "Земля". 
 Третью - для хранения примерного  количества жителей нашей планеты, присвойте ей значение "7 млрд.". 
 Четвертую - для хранения слова "Солнца".

 Далее, используя текст и переменные, Вы должны вывести на экран такой абзац:
 "Мы живем на планете Земля, она делает один оборот вокруг Солнца за 365 дней.  
 Население нашей планеты составляет примерно 7 млрд. человек."

// Решение

var day = 365, planet = 'Земля', piopleCount = '7 млдр.человек.';
document.write('Мы живем на планете ' + planet + ', она делает один оборот вокруг Солнца за ' + day + ' дней. Население нашей планеты составляет примерно ' + piopleCount );
*/
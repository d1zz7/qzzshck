
const params = {
  backgroundColor: '#34464406',
};

const quizzes = [
  {
    question: 'Требуется задать цвет заголовка зелёным. Какое стилевое свойство подойдёт для этой цели?',
    answer:   'color',
  },
  {
    question: 'Что такое стиль?',
    answer:   'Набор правил форматирования элементов веб-страницы.',
  },
  {
    question: 'Как расшифровывается аббревиатура CSS?',
    answer:   'Cascading Style Sheets',
  },
  {
    question: 'Сайт имеет более ста HTML-документов, имеющих одинаковое стилевое оформление. Какой способ подключения CSS подходит лучше всего?',
    answer:   'Связанные стили.',
  },
  {
    question: 'Какой HTML-код применяется для подключения внешнего CSS-файла?',
    answer:   '<link rel="stylesheet" href="mystyle.css">',
  },
  {
    question: 'Какой атрибут используется для определения внутреннего стиля?',
    answer:   'style',
  },
  {
    question: 'Какую строку следует использовать в коде, чтобы сделать версию для печати сайта?',
    answer:   '@import "palm.css" print;',
  },
  {
    question: 'В какой момент подключается стиль для принтера?',
    answer:   'Во время печати документа.',
  },
  {
    question: 'В какой строке кода содержится ошибка?',
    answer:   'p { color: green; color; }',
  },
  {
    question: 'В какой строке содержится корректный синтаксис? ',
    answer:   'body{color:black}',
  },
  {
    question: 'Как правильно вставить комментарий в CSS-файл?',
    answer:   '/* комментарий */',
  },
  {
    question: 'Как добавить фоновый цвет ко всем элементам <H1>?',
    answer:   'h1 { background-color: white }',
  },
  {
    question: 'Как задать стиль у тега <div class="iddqd">DOOM</div>?',
    answer:   'div.iddqd { color: red; }',
  },
  {
    question: 'Как корректно задать стиль для тега <div> с идентификатором loom?',
    answer:   '#loom { font-size: bold; }',
  },
  {
    question: 'Какие теги в данном коде являются соседними? <p><b>Формула серной кислоты:</b><i>H<sub> <small>2</small> </sub>SO<sub> <small>4</small> </sub></i></p>',
    answer:   '<B> и <I>',
  },
  {
    question: 'Необходимо задать цвет фона у текстового поля. Какой стиль для этой цели подойдет?',
    answer:   'INPUT[type="text"] { background: #acdacc; }',
  },
  {
    question: 'Какой псевдоэлемент позволяет добавить текст в начало предложения?',
    answer:   ':before',
  },
  {
    question: 'Что делает следующий стиль? OL LI:first-letter {color: red; }',
    answer:   'Изменяет цвет первой буквы элемента нумерованного списка.',
  },
  {
    question: 'Какой селектор написан с ошибкой?',
    answer:   'div:before:first-letter',
  },
  {
    question: 'first-line в CSS используется  для',
    answer:   'стилизации первой строки текста',
  },
  {
    question: 'first-letter в CSS используется  для',
    answer:   'задания стиля первого символа',
  },
  {
    question: 'Особый вид свойств CSS, которые позволяют работать не над самим элементом, а над его отдельной частью-',
    answer:   'Псевдоэлементы',
  },
  {
    question: 'Стиль для ссылки которая становится активной, но переход по ней еще не совершен',
    answer:   'active',
  },
  {
    question: 'Стиль для посещённой ссылки-',
    answer:   'visited',
  },
  {
    question: 'Особые свойства, которые позволяют менять стиль элемента в зависимости от действий пользователя, а так же положения этого элемента (тега) в общем потоке документа, что позволяет разбавить дизайн страницы некой динамикой и логикой.',
    answer:   'Псевдоклассы',
  },
  {
    question: 'Определяет размер интервала между буквами-',
    answer:   'letter-spacing',
  },
  {
    question: 'Определяет расстояние между словами-',
    answer:   'word-spacing',
  },
  {
    question: 'Правильный способ указания цвета в CSS-',
    answer:   '#71C354',
  },
  {
    question: 'Значение transparent:',
    answer:   'Устанавливает прозрачный цвет.',
  },
  {
    question: 'Свойство padding-top определяет пространство между:',
    answer:   'Верхней границей и содержимым элемента',
  },
  {
    question: 'Свойство margin:',
    answer:   ' Определяет пространство между границами элемента и окружающими элементами.',
  },
  {
    question: 'Как применить один стиль к нескольким селекторам?',
    answer:   'Перечислить селекторы через запятую.',
  },
  {
    question: 'Описание селектора ID:',
    answer:   ' #ID {свойство:значение;}',
  },
  {
    question: 'Что такое HTML селекторы?',
    answer:   'В качестве селектора мы используем имя того html-элемента, который хотим изменить.',
  },
  {
    question: 'Правило селектора класса: ',
    answer:   '.класс {свойство:значение;}',
  },
  {
    question: 'Специальные указатели на HTML-объекты, к которым мы планируем применить css-правило.',
    answer:   'Селекторы',
  },
  {
    question: 'Что выполняет атрибут rel?',
    answer:   'Определяет отношения между текущим документом и файлом, на который делается ссылка.',
  },
  {
    question: 'CSS отвечает за',
    answer:   'оформление и внешний вид',
  },
  {
    question: 'Укажите вариант, в котором правильно определён обработчик формы: ',
    answer:   '<FORM method="get" action="shop.php">',
  },
  {
    question: 'Укажите правильный вариант определения изображения в качестве гиперссылки',
    answer:   '<A HREF="http://www.intuit.ru/"> <IMG SRC="image.gif"></A>',
  },
  {
    question: 'Как описывается скрытое поле в форме',
    answer:   '<input type="hidden">',
  },
  {
    question: 'Как описываются флажки (галочки в квадратиках) в форме',
    answer:   '<input type="checkbox">',
  },
  {
    question: 'Как описываются радиокнопки в форме',
    answer:   '<input type="radio">',
  },
  {
    question: 'Как описывается кнопка отправки в форме',
    answer:   '<input type="submit">',
  },
  {
    question: 'Многострочный текст вводится в тег',
    answer:   '<textarea>…..</textarea> ',
  },
  {
    question: 'Выпадающий список осуществляется через',
    answer:   '<select>',
  },
  {
    question: 'В выпадающим списке множественный выбор осуществляется с помощью атрибута',
    answer:   'multiple',
  },
  {
    question: 'Тег <em> используется для',
    answer:   'задания курсивного  шрифта',
  },
  {
    question: 'Тег <sub> используется для',
    answer:   'задания нижнего индекса',
  },
  {
    question: 'Тег <sup> используется для',
    answer:   'задания верхнего индекса',
  },
  {
    question: 'colspan используется для',
    answer:   'объединения столбцов',
  },
  {
    question: 'rowspan используется для',
    answer:   'объединения строк',
  },
  {
    question: 'В каком случае форма будет отправлена методом "post"?',
    answer:   '<FORM method="post" action="shop.php">',
  },
  {
    question: 'Какой из приведенных тегов создает неотображаемый элемент в форме?',
    answer:   '<INPUT TYPE=HIDDEN NAME=a1 VALUE=1>',
  },
  {
    question: 'Какой тег используются для создания текстовых полей ввода в форме?',
    answer:   '<INPUT TYPE=text>',
  },
  {
    question: 'Какой тег используются для создания многострочный текстовых полей ввода в форме?',
    answer:   '<TEXTAREA>',
  },
  {
    question: 'Какой из перечисленных элементов формы является необходимым для передачи формы на сервер? ',
    answer:   '<INPUT TYPE=submit NAME=a1>',
  },
  {
    question: 'Какой из приведенных фрагментов кода создает переключатель?',
    answer:   '<input type=radio name=a1 value=1><input type=radio name=a1 value=2>',
  },
  {
    question: 'Какой из приведенных тегов позволяет создавать элементы с возможностью выбора нескольких вариантов одновременно?',
    answer:   '<SELECT>',
  },
  {
    question: 'Какой из приведенных тегов позволяет создавать элементы с возможностью выбора нескольких вариантов одновременно?',
    answer:   '<INPUT TYPE=CHECKBOX>',
  },
  {
    question: 'С помощью какого контейнера задается форма?',
    answer:   '<FORM>',
  },
  {
    question: 'С помощью какого элемента можно создавать прокручивающиеся списки в формах?',
    answer:   'SELECT',
  },
  {
    question: 'Какой атрибут элемента INPUT отвечает за вид элемента ввода формы?',
    answer:   'TYPE',
  },
  {
    question: 'Какой атрибут элемента FORM определяет список кодировок для вводимых данных?',
    answer:   'accept-charset',
  },
  {
    question: 'С помощью какого атрибута элемента FORM указывается адрес, куда отправлять данные формы?',
    answer:   'ACTION',
  },
  {
    question: 'Какой атрибут из перечисленных принадлежит тегу INPUT ',
    answer:   'type',
  },
  {
    question: 'Какой из предложенных методов можно применять для отправки формы?',
    answer:   'GET',
  },
  {
    question: 'Какой из предложенных методов можно применять для отправки формы?',
    answer:   'POST',
  },
  {
    question: 'Как указать выравнивание текста в ячейке таблицы?',
    answer:   'vertical-align',
  },
  {
    question: 'В каком примере корректно описан элемент TR?',
    answer:   '<TR><TD>ячейка1</TD></TR>',
  },
  {
    question: 'Что определяет свойство BACKGROUND у элемента разметки TABLE?',
    answer:   'фоновое изображение',
  },
  {
    question: 'Что определяет свойство PADDING у элемента разметки TD?',
    answer:   'расстояние от содержимого до границы ячейки',
  },
  {
    question: 'Какой свойство тега <IMG> задает горизонтальное расстояние между вертикальной границей страницы и изображением?',
    answer:   'margin-left',
  },
  {
    question: 'Какой атрибут тега <IMG> указывает файл изображения и путь к нему?',
    answer:   'SRC ',
  },
  {
    question: 'Выберите корректный пример вставки изображения в HTML-документ',
    answer:   '<IMG SRC="1.gif">',
  },
  {
    question: 'Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?',
    answer:   'P',
  },
  {
    question: 'Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?',
    answer:   'BR',
  },
  {
    question: 'Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?',
    answer:   'H1',
  },
  {
    question: 'Какой свойство позволяет изменять цвет текста?',
    answer:   'color',
  },
  {
    question: 'Какой из приведенных тегов позволяет создавать нумерованные списки?',
    answer:   'OL ',
  },
  {
    question: 'Какой атрибут принадлежит тегу <AREA>? ',
    answer:   'SHAPE',
  },
  {
    question: 'Какописывается поле ввода пароля в форме',
    answer:   '<input type="password">',
  },
  {
    question: 'Вывод на экран в PHP ',
    answer:   'echo "Выводимая информация";',
  },
  {
    question: 'Как пишется цикл от 1 до n в PHP ',
    answer:   'for ($i=1;$i<=$n; $i++) {}',
  },
  {
    question: 'Какое условие написано в PHP правильно',
    answer:   'if ($a==5) {}',
  },
  {
    question: 'Получение значения параметра по методу GET определяется как',
    answer:   "$a=$_GET['parametr'];",
  },
  {
    question: 'Конфигурационный файл PHP ',
    answer:   'php.ini',
  },
  {
    question: 'Строковый комментарии в PHP начинается с',
    answer:   '//',
  },
  {
    question: 'Многострочный комментарии в PHP описывается',
    answer:   '/*……….. */',
  },
  {
    question: 'Определение константы',
    answer:   'define("a","5");',
  },
  {
    question: 'Пусть $a=10. Чему равно $a после операции $a+=15',
    answer:   '25',
  },
  {
    question: 'Для удаления переменной $x  используется   ',
    answer:   'unset($x);',
  },
  {
    question: 'Что означает X%Y',
    answer:   'остаток от деления X на Y',
  },
  {
    question: 'Какая из программ на языке PHP написана правильно:',
    answer:   '$a = 2; $b=3; $c= $a+$b;',
  },
  {
    question: 'Что означает на языке PHP следующая запись $a+=$b:',
    answer:   '$a=$a+$b;',
  },
  {
    question: 'Что означает на языке PHP оператор !=',
    answer:   'не равно',
  },
  {
    question: 'Что будет зраниться в переменной $res в результате PHP-операций $res=$s.$n, если $s="PHP"; $n=7;:',
    answer:   'PHP7',
  },
  {
    question: 'Какой командой на языке PHP осуществляется прерывание цикла:',
    answer:   'break;',
  },
  {
    question: 'Что означает на языке PHP return $s:',
    answer:   'возвращает значение s',
  },
  {
    question: 'Какого типа данных нет в PHP?',
    answer:   'real',
  },
  {
    question: 'Какого типа данных нет в PHP?',
    answer:   'label',
  },
  {
    question: 'Что такое PHP',
    answer:   'язык программирования серверных приложений',
  },
  {
    question: 'Удаление файла производится как',
    answer:   'unlink($file);',
  },
  {
    question: 'Удаление каталога производится как',
    answer:   'rmdir($catalog);',
  },
  {
    question: 'Конфигурационный файл MySQL ',
    answer:   'my.ini',
  },
  {
    question: 'Вывод информации о php осуществляется функцией',
    answer:   'phpinfo();',
  },
  {
    question: 'Пусть PHP-переменная $a=10. Чему она будет равна после операции $a*=15',
    answer:   '150',
  },
  {
    question: 'Пусть PHP-переменная $a=15. Чему она будет равна после операции $a/=10',
    answer:   '1.5',
  },
  {
    question: 'Как пишется конструкция While в PHP',
    answer:   'While (выражение) {блок}',
  },
  {
    question: 'Функция is_string($x) в PHP возвращает true если ',
    answer:   'Переменная $x строка',
  },
  {
    question: 'Функция is_int($x) в PHP возвращает true если ',
    answer:   'Переменная $x целое',
  },
  {
    question: 'Функция is_ array($x) возвращает true если ',
    answer:   'Переменная $x массив',
  },
  {
    question: 'Чему равно PHP-выражение $y=10+($x=2)*3',
    answer:   '16',
  },
  {
    question: 'Знак $ в тексте для вывода на экран пишется как',
    answer:   '\$',
  },
  {
    question: 'Конструкция list() в PHP используется ',
    answer:   'для присвоения переменной элементов массива',
  },
  {
    question: 'Что делает в PHP функция shuffle($a)',
    answer:   'перемешивает массив $a',
  },
  {
    question: 'Что делает в PHP функция rand() ',
    answer:   'генерирует случайное число',
  },
  {
    question: 'Функция array_pop($a) в PHP',
    answer:   'удаляет последний элемент массива',
  },
  {
    question: 'Функция strip_tags($x) в PHP',
    answer:   'удаляет из строки все теги HTML',
  },
  {
    question: 'Функция fread($f,2) в PHP',
    answer:   'читает 2 байта из файла',
  },
  {
    question: 'Функция fseek($f,4,SEEK_SET) в PHP',
    answer:   'смещает указатель на 4 байта с начала файла',
  },
  {
    question: 'Функция fseek($f,4,SEEK_CUR) в PHP',
    answer:   'смещает указатель текущей позиции на 4 байта',
  },
  {
    question: 'Проверка отправки данных по методу GET в PHP',
    answer:   "if (isset($_GET['name']))",
  },
  {
    question: 'Проверка отправки данных по методу POST в PHP',
    answer:   "if (isset($_POST['name']))",
  },
  {
    question: 'Функция в PHP может быть объявлена ',
    answer:   'в любой части программы',
  },
  {
    question: 'Как определяется процедуры в PHP ',
    answer:   'в PHP нет процедур',
  },
  {
    question: 'Как объявить в PHP переменную x  глобальной',
    answer:   'global $x;',
  },
  {
    question: 'Что означает на языке PHP следующая запись: $t=++$r',
    answer:   'присвоение t значение r+1',
  },
  {
    question: 'Конфигурационный файл Apache',
    answer:   'httpd.conf',
  },
  {
    question: 'Условный оператор if  в PHP имеет вид ',
    answer:   'if (условие) {блок_выполнения} else {блок_выполнения1}',
  },
  {
    question: 'Оператор While в PHP имеет вид ',
    answer:   'While (условие) { блок_выполнения }',
  },
  {
    question: 'Оператор do... while в PHP имеет вид ',
    answer:   'do {блок_выполнения} while (выражение)',
  },
  {
    question: 'Оператор for в PHP имеет вид ',
    answer:   'for (Начальное значение; Условие; Приращение) {блок_выполнения}',
  },
  {
    question: 'Операторы передачи управления в PHP',
    answer:   'break,continue',
  },
  {
    question: 'Какой оператор в PHP позволяет пропустить дальнейшие инструкции из блока_выполнения любого цикла и продолжить выполнение с новой итерации?',
    answer:   'continue',
  },
  {
    question: 'Операторы включения в PHP',
    answer:   'include, require',
  },
  {
    question: 'Функция в PHP, возвращающая число аргументов, переданных в текущую функцию.',
    answer:   'func_num_args()',
  },
  {
    question: 'Функция в PHP, возвращающая аргумент из списка переданных в функцию аргументов, порядковый номер которого задан параметром номер_аргумента.',
    answer:   'func_get_arg(номер_аргумента)',
  },
  {
    question: 'Функция в PHP, возвращающая массив, состоящий из списка аргументов, переданных функции.',
    answer:   'func_get_args()',
  },
  {
    question: 'Функция file_exists($f) в PHP',
    answer:   'проверяет существование  файла $f',
  },
  {
    question: 'Для удаления файла в PHP используется функция',
    answer:   'unlink();',
  },
  {
    question: 'Для передачи скрытых данных используется метод',
    answer:   'POST',
  },
  {
    question: 'Для вывода содержимого переменной x в PHP используется выражение',
    answer:   'echo $x;',
  },
  {
    question: 'Логическое "и" в PHP определяется как',
    answer:   '&&',
  },
  {
    question: 'Логическое "или" в PHP определяется как',
    answer:   '||',
  },
  {
    question: 'Какая функция в PHP переименовывает файл',
    answer:   'rename();',
  },
  {
    question: 'Что возвращает функция fileatime($f) в PHP',
    answer:   'время последнего доступа',
  },
  {
    question: 'Что возвращает функция filectime($f) в PHP',
    answer:   'Дата создания файла',
  },
  {
    question: 'Что возвращает функция filemtime($f) в PHP',
    answer:   'Время последнего изменения файла',
  },
  {
    question: 'Функция is_readble($f) в PHP возвращает true',
    answer:   'если можно открыть файл',
  },
  {
    question: 'Функция is_writeble($f) в PHP возвращает true',
    answer:   'если можно записать в  файл',
  },
  {
    question: 'Функция is_executable($f) в PHP возвращает true',
    answer:   'если можно запустить файл',
  },
  {
    question: 'Что осуществляет в PHP функция mkdir()',
    answer:   'создает каталог',
  },
  {
    question: 'Что осуществляет в PHP функция rmdir()',
    answer:   'удаляет пустой  каталог',
  },
  {
    question: 'Что осуществляет в PHP функция chdir()',
    answer:   'изменяет текущий каталог',
  },
  {
    question: 'Что осуществляет в PHP функция getcwd()',
    answer:   'возвращает текущий каталог',
  },
  {
    question: 'Что осуществляет в PHP функция rewinddir()',
    answer:   'перематывает  каталог на начало',
  },
  {
    question: 'Функция fgets()в PHP используется  ',
    answer:   'для построчного чтения  файла',
  },
  {
    question: 'Конструкция While (!feof($f)) … в PHP означает',
    answer:   'пока не конец файла',
  },
  {
    question: 'Режим SEEK_SET(0) функции fseek() в PHP',
    answer:   'смещает указатель, начиная с начало файла',
  },
  {
    question: 'Режим  SEEK_CUR(0) функции fseek() в PHP',
    answer:   'смещает указатель, начиная с текущей позиции',
  },
  {
    question: 'Режим  SEEK_END(0) функции fseek() в PHP',
    answer:   'смещает указатель, начиная с конца файла',
  },
  {
    question: 'Режим  LOCK_SH(0) функции flock() в PHP',
    answer:   'позволяет другим пользователям также читать файл',
  },
  {
    question: 'Режим  LOCK_EX(0) функции flock() в PHP',
    answer:   'исключительная блокировка',
  },
  {
    question: 'Режим  LOCK_UN(0) функции flock() в PHP',
    answer:   'снятие блокировки',
  },
  {
    question: 'Функция array_shift() в PHP',
    answer:   'удаляет первый элемент массива',
  },
  {
    question: 'Функция strtolower($s) в PHP',
    answer:   'переводит строку $s в нижний регистр',
  },
  {
    question: 'Функция strtoupper($s) в PHP',
    answer:   'переводит строку $s в верхний регистр',
  },
  {
    question: 'Функция convert_cyr_string() в PHP',
    answer:   'переводит строку из одной кодировки в другую',
  },
  {
    question: 'Функция htmlspesialchars($s) в PHP',
    answer:   'заменяет специальные символы их HTML-эквивалентами',
  },
  {
    question: 'Функция pow($a,$b) в PHP',
    answer:   'возводит a в b степень',
  },
  {
    question: 'Какая функция в PHP устанавливает указатель на первый элемент массива?',
    answer:   'reset()',
  },
  {
    question: 'Какая функция в PHP перемещает указатель на один элемент массива вперед?',
    answer:   'next()',
  },
  {
    question: 'Какая функция в PHP устанавливает указатель на последний элемент массива?',
    answer:   'end()',
  },
  {
    question: 'Какая функция в PHP перемещает указатель на один элемент массива назад?',
    answer:   'prev()',
  },
  {
    question: 'Какая функция в PHP возвращает ключ текущего элемента массива?',
    answer:   'key()',
  },
  {
    question: 'Какая функция в PHP добавляет элементы в начало массива?',
    answer:   'array_unshift()',
  },
  {
    question: 'Какая функция в PHP добавляет элементы в конец массива?',
    answer:   'array_push()',
  },
  {
    question: 'Какая функция в PHP удаляет первый элемент массива и возвращает его?',
    answer:   'array_shift()',
  },
  {
    question: 'Какая функция в PHP удаляет последний элемент массива и возвращает его?',
    answer:   'array_pop()',
  },
  {
    question: 'Какая функция в PHP возвращает ассоциативный массив, состоящий из уникальных значений?',
    answer:   'array_unique()',
  },
  {
    question: 'Для сортировки массива в PHP по значениям в алфавитном порядке используется:',
    answer:   'asort()',
  },
  {
    question: 'Для сортировки массива в PHP по значениям в обратном порядке используется:',
    answer:   'arsort()',
  },
  {
    question: 'Для сортировки массива в PHP по ключам в алфавитном порядке используется:',
    answer:   'ksort()',
  },
  {
    question: 'Для сортировки массива в PHP по ключам в обратном порядке используется:',
    answer:   'krsort()',
  },
  {
    question: 'Какая функция в PHP возвращает количество символов в строке?',
    answer:   'strlen()',
  },
  {
    question: 'Какая функция в PHP удаляет пробельные символы в начале и конце строки?',
    answer:   'trim()',
  },
  {
    question: 'Какая функция в PHP удаляет пробельные символы в начале строки?',
    answer:   'ltrim()',
  },
  {
    question: 'Какая функция в PHP удаляет пробельные символы в конце строки?',
    answer:   'rtrim()',
  },
  {
    question: 'Функция в PHP, позволяющая разбить длинный текст на строки указанной длины:',
    answer:   'wordwrap()',
  },
  {
    question: 'Чтобы сделать в PHP первый символ строки прописными, используется функция:',
    answer:   'ucfirst()',
  },
  {
    question: 'Чтобы сделать в PHP первые символы всех слов прописными, используется функция:',
    answer:   'ucwords()',
  },
  {
    question: 'Чтобы получить в PHP список полей таблицы базы данных, используется функция:',
    answer:   'mysqli_fetch_fields',
  },
  {
    question: 'Чтобы получить в PHP имя поля таблицы базы данных, используется функция:',
    answer:   'mysqli_fetch_field',
  },
  {
    question: 'Чтобы получить в PHP длину поля таблицы базы данных, используется функция:',
    answer:   ' mysqli_fetch_lengths',
  },
  {
    question: 'Чтобы получить в PHP тип поля таблицы базы данных, используется функция:',
    answer:   'Правильного ответа нет.',
  },
  {
    question: 'Чтобы получить  в PHPсписок флагов поля таблицы базы данных, используется функция:',
    answer:   ' Правильного ответа нет.',
  },
  {
    question: 'Какая функция используется в PHP скрипте, чтобы записать данные в базу данных?',
    answer:   'mysqli_query()',
  },
  {
    question: 'Какая функция используется в PHP скрипте, чтобыполучить данные, из запроса к MYSQL',
    answer:   'mysqli_fetch_assoc()',
  },
  {
    question: 'Инициирование сессии в PHP',
    answer:   'session_start',
  },
  {
    question: 'Что в PHP дает код  $a=substr("abcd",2,2)',
    answer:   'в $a будет "cd"',
  },
  {
    question: 'Что в PHP дает код  $pos=strpos("abcd","c")',
    answer:   'в $pos будет 2',
  },
  {
    question: 'Что в PHP делает фунция trim',
    answer:   'убирает пробелы',
  },
  {
    question: 'Что в PHP дает код  $v=strlen($x)',
    answer:   'длину строки $x',
  },
  {
    question: 'Функция gettype($x) в PHP',
    answer:   'возвращает тип переменной $x',
  },
  {
    question: 'Что в PHP значит x<<y',
    answer:   'поразрядный сдвиг битов влево',
  },
  {
    question: 'Что в PHP значит x>>y',
    answer:   'поразрядный сдвиг битов вправо',
  },
  {
    question: 'Функция array_push($a,5) в PHP эквивалентна операции',
    answer:   '$a[]=5;',
  },
  {
    question: 'При передачи методом GET информация находится',
    answer:   'в конце Интернет адреса',
  },
  {
    question: 'Какой симол в PHP определяет "не"',
    answer:   '!',
  },
  {
    question: 'Функция explode в PHP используется для',
    answer:   'разбивания строк',
  },
  {
    question: 'Что означает условное выражение isset($a) в PHP',
    answer:   'переменная $а существует и имеет значение, отличное от NULL',
  },
  {
    question: 'Каким символом обозначается переменная в PHP?',
    answer:   '$',
  },
  {
    question: 'К какой системе управления базами данными относится СУБД MySQL? ',
    answer:   'Реляционные',
  },
  {
    question: 'Какая из следующих проверок сможет определить наличие произвольной строки в PHP?',
    answer:   'if(strpos($mystring, "PHP") !== false)',
  },
  {
    question: 'Какой оператор вы можете использовать в PHP определения того, является ли текущий объект экземпляром указанного класса?',
    answer:   'instanceof',
  },
  {
    question: 'В чем различие между методом объявленным статически и нормальным методом? ',
    answer:   'Статический метод может быть вызван только используя синтаксис :: и никогда из экземпляра',
  },
  {
    question: 'Какое слово используется чтобы обозначить неполный класс или метод, который должен быть продлен и/или реализован в целях его использования?',
    answer:   'Abstract',
  },
  {
    question: 'Какая функция в PHP используется чтобы добавить элемент в массив?',
    answer:   'array_unshift()',
  },
  {
    question: 'Какая из следующих функций в PHP отсортируют массив по значению?',
    answer:   'asort()',
  },
  {
    question: 'Как указать кодировку html-документа?',
    answer:   '<meta charset="utf-8">',
  },
  {
    question: 'Какой элемент внутри секции <head> является обязательным?',
    answer:   '<title>',
  },
  {
    question: 'Какая строка содержит ошибку?',
    answer:   'Все ответы верные',
  },
  {
    question: 'Укажите тег, позволяющий определить поле для ввода пароля.',
    answer:   "<input type='password'> ",
  },
  {
    question: 'Выберите верный способ создания выпадающего списка',
    answer:   '<select>',
  },
  {
    question: 'Как создать e-mail ссылку?',
    answer:   '<a href="mailto:xxx@yyy">',
  },
  {
    question: 'Выберите правильный способ создания ссылки?',
    answer:   '<a href="http://www.w3schools.com">W3Schools</a>',
  },
  {
    question: 'Для задания текста, всплывающего при наведении на графический элемент, применяется атрибут:',
    answer:   'title',
  },
  {
    question: 'Какие теги из перечисленных ниже определяют блочные элементы?',
    answer:   '<p>',
  },
  {
    question: 'Объединение несколько ячеек в одну ячейку делается с помощью',
    answer:   'атрибута  colspan',
  },
  {
    question: 'Тег <td>.....</td> создаёт',
    answer:   'ячейку',
  },
  {
    question: 'Тег для создания выпадающего списка',
    answer:   '<select></select> ',
  },
  {
    question: 'Какое действие выполняет данный код <body oncopy="return false">',
    answer:   'запрет на копирование текста',
  },
  {
    question: 'К какому типу ссылок относится данный код: <audio src="http://test.com/test.mp3"></audio>?',
    answer:   'Абсолютная',
  },
  {
    question: 'Что означает следующий код: <img src="адрес ......." >',
    answer:   'Вставка изображения',
  },
  {
    question: 'Параметр авто выбора элемента формы checkbox или radio',
    answer:   'checked',
  },
  {
    question: 'Тело web-страницы описывается с помощью тега',
    answer:   '<body></body> ',
  },
  {
    question: 'Какой тип списка устанавливает атрибут type="a" тега <ol>?',
    answer:   'Нумерованный, с латинскими буквами.',
  },
  {
    question: 'Каким тегом задается ссылка на web-странице?',
    answer:   '<a href="..."></a>',
  },
  {
    question: 'Какой тег используется для вывода текста в том виде, в котором он представлен в коде html-документа?',
    answer:   '<pre>',
  },
];

module.exports = {
  quizzes,
  params,
};

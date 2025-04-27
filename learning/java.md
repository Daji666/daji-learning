# Java学习

这里记录Java的学习内容。

## 1.Java入门

**学习套路:**
这个技术是什么？
这个技术可以解决什么问题？
这个技术怎么应用？
这个技术在使用中有什么注意细节？

平台:JavaSE(基础) JavaEE(企业服务端开发) JavaME(移动设备应用，较少)

如何使用:安装JDK，配置环境变量 JDK8 11 21

开发平台:IDEA

**常用快捷键:**
main/psvm sout 快捷键入相关代码
CTRL+D 复制当前行到下一行
CTRL+X 剪切当前行
CTRL+ALT+L 格式化代码
ALT+SHIFT+↑/↓ 上下移动代码
Ctrl+/ Ctrl+Shift+/ 单行/多行注释
/ /* /**三种注释(单行 多行 文档)



## 2.常用API

**1.String操作字符串**
```java
int length() // 获取字符串长度

char[] toCharArray()// 字符串转字符数组

char charAt(int index) // 提取字符串某个索引位置的字符

boolean equals(Object anObject) // 判断字符串内容

boolean equalsIgnoreCase(String aString) // 判断字符串内容(忽略大小写)

String substring(int begin,int end) // 获取部分字符串

String replace(target,replacement)// 替换字符串

boolean contains(CharSequence s)// 判断是否包含

boolean startWith/endsWith(string prefix)// 判断字符串以什么开头/结尾

String[] split(String regax)// 字符串按括号中的内容切割

```
**注意事项**
1.String的对象是不可变字符串对象，会在堆内存的字符串常量池存储。
2." "定义的相同字符串的地址相同，只会产生一个对象，new定义的相同字符串地址不同，每new一次会产生一次新的对象

**2.ArrayList 集合**
```java
ArrayList list = new ArrayList() // 定义

void add(int index,E element) // 插入数据

E get(int index) // 根据索引获取数据

int size() //获取集合大小

E remove(int index) // 根据索引删除数据，返回被删除的数据

boolean remove(Object o) // 直接删除数据，返回真假，默认删第一个出现的

E set(int index,E element) // 修改某个索引位置出现的数据，返回修改前的数据

```


## 3.JavaSE进阶

一.面向对象特征

封装-继承-多态

二.继承(extends)
让一个子类继承一个父类，二者具有公共属性和行为。
优点:提高代码复用性，建立类与类的关系

public class 子类 extends 父类{

}
**特点:**
1.只支持单继承，不支持多继承，但可以多层继承

2.子类方法访问一个变量/方法
规则:就近原则(优先找子类，然后找父类)
局部变量直接访问
本类成员变量，使用this访问
父类成员变量，使用super访问

三.方法重写

发生在父子类(继承)中，子类的方法和父类一模一样
子类需要父类的功能，但父类的功能不完全满足需求

**注意事项**
重写方法的名称和形参列表必须和被重写方法名和参数列表一致
私有方法不能被重写
子类重写父类方法时，子类访问权限要大于等于父类方法权限

**@Override** 注解
检查是否有要重写的方法存在(检查语法)

三.抽象类

用abstract修饰的类

abstract修饰且没有具体实现的方法为抽象方法（必须写在抽象类中）

场景:父类定义一个方法时，但子类每个方法实现的逻辑都不一样

注意:子类必须重写抽象类中所有的抽象方法

**四.设计模式**

设计模式，就是一种解决开发中某个问题的方案

模板设计模式:把抽象类整体看作一个模板，模板中不能决定的东西定义为抽象方法，让使用模板的类(继承抽象类的类)去重写抽象方法实现需求

五.匿名对象
没有对象名接收的对象称为匿名对象

使用方式:
1.直接调用成员方法
2.直接当作方法参数传递
3.直接当作返回值

## 第四部分

44444444444
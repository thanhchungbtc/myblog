---
title: "[PHP]Windows Case Insensitive Problem"
date: 2017-05-25T06:05:03+09:00
thumbnail: posts/case.jpg
tags: ["php"]
---

while developing in languages that are case-insensitive like `php`, be careful if development OS and production OS are acting differently at case-sensitivity, otherwise, some weird things will happen.

For example, the code below works well in Windows
```php
// filename: app/Models/Userorder.php
namespace App\Models;

class UserOrder {
}
```
usage
```php
new \App\Models\UserOrder(); 
```

> Did you notice the difference between **file name** and **class name**?

Because **php** use **autoload** to correctly load the file and class at runtime, in the declaration
```php
new \App\Models\UserOrder();
```
first it will try loading the file app/Models/**UserOrder.php** and instance **UserOrder** object.

As Windows is case-insensitive, **UserOrder.php** == **Userorder.php**, no problem here, but in Linux, you will get 

> Fatal error: Class UrderOrder not found

In that case, change the file name that matches the class name
```sh
app/Models/Userorder.php -> app/Models/UserOrder.php
```

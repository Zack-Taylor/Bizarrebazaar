create table [User](
ID int primary key identity (1,1) not null,
FirstName varchar(255) not null,
LastName varchar(255) not null,
AcctCreated DateTime not null,
AcctActive bit default 1,
IsSeller bit default 0,
UserName varchar(255) not null,
Email varchar(255) not null,
ImageUrl varchar(255) null,
[Password] varchar(255) not null,
)

create table Product(
ID int primary key identity (1,1) not null,
ProductTypeId int not null,
Price decimal not null,
Title varchar(255) not null,
[Description] varchar(255) not null,
Quantity int not null,
UserId int foreign key references [User](ID) not null,
DateAdded DateTime not null,
ImageUrl varchar(255) null,
)

create table PaymentType(
ID int primary key identity (1,1) not null,
[Name] varchar(255) not null,
)

create table Payment(
ID int primary key identity (1,1) not null,
PaymentTypeId int foreign key references PaymentType(ID) not null,
AcctNumber int not null,
UserId int foreign key references [User](ID) not null,
)

create table [Order](
ID int primary key identity (1,1) not null,
UserId int foreign key references [User](ID) not null,
OrderTotal decimal not null,
InvoiceDate DateTime not null,
IsComplete bit default 0,
PaymentId int foreign key references Payment(ID) not null,
)

create table ProductType(
ID int primary key identity (1,1) not null,
[Name] varchar(255) not null,
)

create table LineItem(
ID int primary key identity (1,1) not null,
OrderId int foreign key references [Order](ID) not null,
ProductId int foreign key references Product(ID) not null,
Quantity int not null,
)

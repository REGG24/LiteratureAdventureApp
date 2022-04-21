GO
  CREATE VIEW vw_book_author AS
  SELECT B.[NAME] as TITLE,B.[DESCRIPTION], B.PRICE, B.STOCK, A.[NAME] as AUTHOR 
  FROM dbo.books as B JOIN dbo.authors as A ON B.ID_AUTHOR = A.ID_AUTHOR

  GO
  SELECT * FROM vw_book_author
  GO
  /*this will not work because it affects multiple rows*/
  INSERT INTO vw_book_author VALUES('Libro negro','Cuentos',15,15,'papini');

  GO

  CREATE or ALTER TRIGGER tg_addBook ON vw_book_author
  INSTEAD OF INSERT 
  AS 
   BEGIN 
    /*print 'you cant insert data'
	rollback*/
	DECLARE @AUTHORid as INT
	DECLARE @DES as VARCHAR(50)
	DECLARE @TITLE as VARCHAR(50)
	DECLARE @STOCK as INT
	DECLARE @PRICE as INT
	SELECT @AUTHORid = 1, @DES=inserted.[DESCRIPTION], @TITLE = inserted.TITLE,
	@STOCK = inserted.STOCK, @PRICE= inserted.PRICE
	FROM authors JOIN inserted on inserted.AUTHOR = authors.[NAME]
	IF (@AUTHORid is null)
	Begin  
	/* For the error we ned a number 0-25 to show the severity of the problem
	and then another number to 0-255 to state most implementations use the 1 */
		Raiserror('Invalid Author. Statement Terminated OK',16,1)  
		return  
	End  
	INSERT INTO books VALUES(@TITLE,@DES, @PRICE, @STOCK, @AUTHORid );
END

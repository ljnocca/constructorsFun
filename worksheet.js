/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////      _____              __               __                 ////
////     / ___/__  ___  ___ / /_______ ______/ /____  _______    ////
////    / /__/ _ \/ _ \(_-</ __/ __/ // / __/ __/ _ \/ __(_-<    ////
////    \___/\___/_//_/___/\__/_/  \_,_/\__/\__/\___/_/ /___/    ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple constructor function called `Foo` and create a new
// instance from it called `foo`. Don't overthink it. The `Foo` function 
// doesn't even need to contain any code. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Foo (){

}

var foo = new Foo

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

// Create a constructor function called `Dog`. This constructor should 
// set at least one property on instances created from it. The property 
// should be called `philosophy` and the value should be `life is ruff`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Dog (){
	this.philosophy = 'life is ruff'
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

// Create a constructor function called `Cat`. `Cat` instances should 
// contain a method called `greet` that returns the string `meow`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Cat (){
	this.greet=function(){
		return 'meow'
	}
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //


// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

// Create a constructor called `Student`. The constructor should take one 
// argument, which will fill that student's `expertise` attribute. The
// student should also have a `knowledge` attribute, which has a beginning
// value of zero. Yet another property of a student object should be the 
// `learn` method, which will take one input: the amount of knowledge the
// student will gain. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Student(expertise){
	this.expertise = expertise
	this.knowledge = 0
}

Student.prototype.learn=function(knowledgeIncrease){
		this.knowledge = this.knowledge + knowledgeIncrease
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //




	 //  _   _   ___  ____________  ___  ______________ _____ 
	 // | | | | / _ \ | ___ \  _  \ |  \/  |  _  |  _  \  ___|
	 // | |_| |/ /_\ \| |_/ / | | | | .  . | | | | | | | |__  
	 // |  _  ||  _  ||    /| | | | | |\/| | | | | | | |  __| 
	 // | | | || | | || |\ \| |/ /  | |  | \ \_/ / |/ /| |___ 
	 // \_| |_/\_| |_/\_| \_|___/   \_|  |_/\___/|___/ \____/ 
	 //                                                  
	 //		             (
	 //		        .            )        )
	 //		                 (  (|              .
	 //		             )   )\/ ( ( (
	 //		     *  (   ((  /     ))\))  (  )    )
	 //		   (     \   )\(          |  ))( )  (|
	 //		   >)     ))/   |          )/  \((  ) \
	 //		   (     (      .        -.     V )/   )(    (
	 //		    \   /     .   \            .       \))   ))
	 //		      )(      (  | |   )            .    (  /
	 //		     )(    ,'))     \ /          \( `.    )
	 //		     (\>  ,'/__      ))            __`.  /
	 //		    ( \   | /  ___   ( \/     ___   \ | ( (
	 //		     \.)  |/  /   \__      __/   \   \|  ))
	 //		    .  \. |>  \ HARD | __ | MODE /   <|  /
	 //		         )/    \____/ :..: \____/     \ <
	 //		  )   \ (|__  .      / ;: \          __| )  (
	 //		 ((    )\)  ~--_     --  --      _--~    /  ))
	 //		  \    (    |  ||               ||  |   (  /
	 //		        \.  |  ||_             _||  |  /
	 //		          > :  |  ~V+-I_I_I-+V~  |  : (.
	 //		         (  \:  T\   _     _   /T  : ./
	 //		          \  :    T^T T-+-T T^T    ;<
	 //		           \..`_       -+-       _'  )
	 //		 )            . `--=.._____..=--'. ./        



// 5. The `greet` function should live on the `Student` prototype, 
// not on the object instance. 



// --------------------------------------------------------------- //
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 6. ------------------------------------------------------------ //

// Create a constructor called `Key`. Create another constructor
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece of secret data. Keep it 
// private to the constructor (i.e., don't use something like
// this.secret to transfer it into object instances made 
// from the constructor.)
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key`. Keep that private as well. Add a function
// to the Safe prototype called `unlock` that accepts a Key instance. 
// If the key matches the key that was used to create the Safe; then
// return the secret value.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Key(){
}

function Safe(safeCode,){
	this.unlock=function(instanceOfKey){
		if (instanceOfKey===safeCode){
			return safeCode
		}

	}j
}



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //


// 7. ------------------------------------------------------------ //

// Create a constructor called `Validator`. Give it a method on its
// prototype called `isEmail` that takes a string and returns true if
// the string is a valid email address and false if it is not.

// For this exercise, you must use regular expressions.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



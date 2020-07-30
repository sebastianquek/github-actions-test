console.log("Not so secret var", process.env.NOT_SO_SECRET_VAR);
console.log("Secret var", process.env.SECRET_VAR);
console.log("Secret var, uncensored?", JSON.stringify(process.env.SECRET_VAR));
console.log("Another GitHub var", process.env.ANOTHER_VAR);

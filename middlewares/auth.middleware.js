const authRequire = (req, res, next)=> {
    const body = req.body;

    if (body.username !== "Ama" || body.password !== "secret" ) {
      return  res.send("Invalid credential");
    }
    next();
}

module.exports ={
    authRequire,
}

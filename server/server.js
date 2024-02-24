import  express  from "express";
import mysql from 'mysql';
import cors from 'cors'

const app=express();
app.use(cors());
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    database:'blood'

})

app.get('/',(req,res)=>{
    const sql="SELECT *FROM donation";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message:"error in server"});
        return res.json(result);

    })
})

app.post('/donation',(req,res)=>{
    const sql="INSERT INTO donation (`user_name`,`user_gender`,`user_age`,`user_group`,`user_address`,`user_phone`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.bloodgroup,
        req.body.address,
        req.body.phone,
    ]
      db.query(sql, [values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
      })
})

app.get('/read/:id', (req,res)=>{
    const sql = "SELECT * FROM donation WHERE user_id = ?";
    const id=req.params.id;
    
    db.query(sql,[id], (err,result)=>{
    if(err) return res.json({Message: "error in server"});
    return res.json(result);
})
})



app.put('/edit/:id', (req , res)=>{
    const sql='UPDATE donation SET `user_name`=?,`user_gender`=?,`user_age`=?,`user_group`=?,`user_address`=?,`user_phone`=? WHERE user_id=?';
    const id=req.params.id;
    db.query(sql,[req.body.name, req.body.gender, req.body.age, req.body.bloodgroup, req.body.address, req.body.phone, id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })
})


app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM donation WHERE user_id=? ";
    const id=req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message: "error in server"});
    return res.json(result);

    })



})

app.listen(8000,()=>{
    console.log("listening")
})
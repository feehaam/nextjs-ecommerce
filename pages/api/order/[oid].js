import { useState } from "react";

export default (req, res) => {
    console.log(req.query);

    let id = req.query.oid;
    console.log(id);

    

    res.send("done");
}
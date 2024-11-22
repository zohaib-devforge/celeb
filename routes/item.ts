
import * as express from "express";
import axiosInstance from './../axios';
const router = express.Router();
router.get('/:id', async (req, res) => {
    try{
        console.log("item api running", req.params.id);
        const itemData = await axiosInstance.get(`/Item/${req.params.id}`);
        console.log("itemData",itemData)
        res.status(200).json(itemData.data);
    }catch(error){
        console.error('Error fetching data from Bubble:', error);
        res.status(500).json({ error: 'Failed to fetch data from Bubble' });
    }
});

router.get('/', async (req, res) => {
    try{
        console.log("item api running");
        const itemData = await axiosInstance.get('/Item');
        console.log("itemData",itemData)
        res.status(200).json(itemData.data);
    }catch(error){
        console.error('Error fetching data from Bubble:', error);
        res.status(500).json({ error: 'Failed to fetch data from Bubble' });
    }  
});

router.post('/', async (req, res) => {
    try{
        const bodyData = req.body; 
        console.log("item api running", bodyData);
        const itemData = await axiosInstance.post('/Item',bodyData);
        console.log("itemData",itemData)
        res.status(200).json(itemData.data);
    }catch(error){
        console.error('Error sending data to Bubble:', error);
        res.status(500).json({ error: 'Failed to send data to Bubble' });
    }  
});

router.put('/:id', async (req, res) => {
    try{
        const bodyData = req.body;
        console.log("item api running", req.params.id);
        console.log("item api running", bodyData);
        const itemData = await axiosInstance.put(`/Item/${req.params.id}`,bodyData);
        console.log("itemData",itemData)
        res.status(200).json(itemData.data);
    }catch(error){
        console.error('Error updating data to Bubble:', error);
        res.status(500).json({ error: 'Failed to update data to Bubble' });
    }  
});

 export default router;

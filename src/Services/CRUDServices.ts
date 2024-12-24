import e from "express";
import Terror, {TerrorModel} from "../Models/TerorModel";

const getOneTerror = async (_id: string) => {
    try {
      console.log(_id);
      const terror = await Terror.findById(_id);
      console.log(terror);
      if (!terror) return "the terror is not found";
      return terror;
    } catch (error: any) {
      return `cant find mongo DB ${error}`;
    }
  };

const addTerror = async (postData:Partial<TerrorModel>) => {
    try {
      const newTerror = new Terror(postData)
      return await newTerror.save();
    } catch (error) {
      return `cant find the mongo DB ${error}`;
    }
  };

  const editTerror = async (_id: string, newData: Partial<TerrorModel>) => {
    try {
      const event = await Terror.findById(_id);
      const updatePuzzele = await Terror.findByIdAndUpdate(
        _id,
        {
          ...newData,
          
        },
        {
          new: true,
        }
      );
      return updatePuzzele;
    } catch (error: any) {
      return  (`cant find the mongo DB ${error}`);
    }
  };

  const deleteTerror = async (_id: string) => {
    try {
      const terror = await Terror.findByIdAndDelete(_id);
      return "Terror deleted";
    } catch (error: any) {
      return `cant find the mongo DB ${error}`;
    }
  };

  export {addTerror, editTerror, deleteTerror,getOneTerror};
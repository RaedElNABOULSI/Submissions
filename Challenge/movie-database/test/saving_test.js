import { AssertionError } from "assert";



const assert=require('assert')
const MarioChar=require('../models/mariochar')


describe('saving records',function()
{
//create tests

it('saves a record to database',function(done)
{
var char=new MarioChar({
    title: 'park',
    year: 2011, 
    rating: 6

})
  
char.save().then(function()
{
assert(char.isNew===false)
done()

})


})


})
const asyncHandler=(requesthandler)=>{
    (req,res,next)=>{
Promise.resolve(requesthandler(req,res,next)).catch((error)=>next(error))
    }
}
export default asyncHandler
// exp of above asyncHandler Step by step
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>{()=>{}}
// function async(fn){
// ()=>{

// }
// }
// const asyncHandler=(fn)=> async(req,res,next)=>{
//     try{
// await fn(req,res,next)
//     }
//     catch (error){
// res.status(error.code||500).json({
//     success:false,
//     message:error.message
// })
//     }
// }

// import grpc from "@grpc/grpc-js"

// import protoloader from "@grpc/proto-loader"

import caller from "grpc-caller"
const PROTO_FILE="./service_def.proto";

const client2 = caller('0.0.0.0:3000', PROTO_FILE, 'DataService')

export default client2

// const option={
//     keepCase:true,
//     longs: String,
//     enums: String,
//     default:true,
//     oneofs:true
// };

// const pkgDefs=protoloader.loadSync(PROTO_FILE, option);

// const dataservice=grpc.loadPackageDefinition(pkgDefs).DataService;

// const client2=new dataservice("localhost:3000",grpc.credentials.createInsecure());

// export default client2

// client2.postData({name:"learning gRPC",price:4567,category:"Course"},(error,data)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log(data)
//         }
// })
// client2.getData({id:"6367d4610e02d6ea14acabf6"},(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// client2.updateData({id:"6367d4610e02d6ea14acabf6",price:567},(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// client2.deleteData({id:"636906c9bdf3fef1cc322d6f"},(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
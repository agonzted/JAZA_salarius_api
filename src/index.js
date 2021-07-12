const app = require('./app');
const port = 4000;
const { connect } = require('./database')

async function main(){
    try{
        await connect();
        
        await app.listen(port);
        console.log('Server on port :' + port);

    } catch(e){
        console.log('Error: ' +e);
    }
    
}

main();
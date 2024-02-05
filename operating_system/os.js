import os from 'os';







export const ops = async (input) => {
    const secongArg = input.trim().split(' ')[1];

    switch(secongArg) {
        case '--EOL': {
            console.log(`End of line: ${JSON.stringify(os.EOL)}`);
        }
        case '--cpus': {
            const answer = {
                'Amount of CPUS': '',
                'models and clock rates': []
            }
            answer['Amount of CPUS'] = os.cpus().length;
            for (let i of os.cpus()) {
                let initialSpeed = i.speed;
                while (initialSpeed > 10) {
                    initialSpeed /= 10;
                }
                initialSpeed = Math.round(100 * initialSpeed) / 100;
                answer['models and clock rates'].push(
                    {
                        'model': i.model,
                        'speed': initialSpeed
                    }
                );
            }
            return console.log(answer);
        }
        case '--homedir': {
            return console.log(os.homedir());
        }
        case '--username': {
            return console.log(os.userInfo().username) ;
        }
        case '--architecture': {
            console.log(process.arch);
        }
        case '--platform': {
            return os.platform();
        }case '--release': {
            return os.release();
        }
    }


}
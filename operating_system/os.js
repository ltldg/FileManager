import os from 'os';







export const os = async (input) => {
    const secongArg = input.trim().split(' ')[2];


    switch(secongArg) {
        case '--EOL': {
            return JSON.stringify(os.EOL);
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
            return answer;
        }
        case '--homedir': {
            return os.homedir();
        }
        case '--username': {
            return os.userInfo().username;
        }
        case '--architecture': {
            return process.arch;
        }
        case '--platform': {
            return os.platform();
        }case '--release': {
            return os.release();
        }
    }


}
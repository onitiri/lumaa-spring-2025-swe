const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function updateJwtSecret() {
  const envPath = path.join(__dirname, '..', '.env');
  
  const newSecret = crypto.randomBytes(64).toString('hex');
  
  try {
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    // Check if JWT_SECRET already exists
    if (envContent.includes('JWT_SECRET=')) {
      envContent = envContent.replace(
        /JWT_SECRET=.*/,
        `JWT_SECRET=${newSecret}`
      );
    } else {
      envContent += `\nJWT_SECRET=${newSecret}`;
    }

    // Write back to .env file
    fs.writeFileSync(envPath, envContent.trim() + '\n');
    console.log('JWT_SECRET updated successfully!');
  } catch (error) {
    console.error('Error updating JWT_SECRET:', error);
    process.exit(1);
  }
}

updateJwtSecret();

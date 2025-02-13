# Development
FROM node:18-alpine AS development
WORKDIR /app
COPY package.json package-lock.json ./  
RUN npm install                               
COPY . .
CMD ["npm", "run", "dev"]                    

# Production
FROM node:18-alpine AS production
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm install --production              
COPY . .
RUN npm run build      
# Expose port
EXPOSE 3000                     
CMD ["npm", "run", "start"]                 
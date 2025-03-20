from fastapi import FastAPI
from routes import auth

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Bienvenue sur City Stade App"}

# Inclure les routes
app.include_router(auth.router)  # Ne pas ajouter "prefix=/auth" ici, car c'est déjà dans auth.py

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
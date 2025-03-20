from fastapi import APIRouter

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register")
def register():
    return {"message": "Inscription réussie"}

@router.post("/login")
def login():
    return {"message": "Connexion réussie"}
<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use  HasFactory;


    protected $fillable = [
        'login',
        'nome',
        'cpf',
        'email',
        'endereco',
        'senha'
    ];

    public function empresas()
    {
        return $this->belongsToMany(Empresa::class, 'empresas_clientes', 'cliente_id', 'empresa_id');
    }
}

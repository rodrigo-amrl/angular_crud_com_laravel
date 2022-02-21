<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use  HasFactory;


    protected $fillable = [
        'nome',
        'cnpj',
        'endereco'
    ];

    public function clientes()
    {
        return $this->belongsToMany(Cliente::class, 'empresas_clientes', 'empresa_id', 'cliente_id');
    }
    public function funcionarios()
    {
        return $this->belongsToMany(Funcionario::class, 'empresas_funcionarios', 'empresa_id', 'funcionario_id');
    }
}

<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpresaCliente extends Model
{
    use  HasFactory;

    protected $table = "empresas_clientes";

    protected $fillable = [
        'cliente_id',
        'empresa_id',
    ];
}

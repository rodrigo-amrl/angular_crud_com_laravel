<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpresaFuncionario extends Model
{
    use  HasFactory;

    protected $table = "empresas_funcionarios";


    protected $fillable = [
        'funcionario_id',
        'empresa_id',
    ];
}

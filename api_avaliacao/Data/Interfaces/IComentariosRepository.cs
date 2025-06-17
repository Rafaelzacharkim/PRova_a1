using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_avaliacao.Data.Interfaces
{
    public interface IComentariosRepository
    {
        public void Cadastrar(ComentarioRepository comentario);
        public List<Comentario> ListarPorItem(int id);
        public async Task<bool> Delete(int id, int ItemId);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_avaliacao.Models;
using api_avaliacao.Data.Interfaces;
namespace api_avaliacao.Data
{
    public class ComentarioRepository : IComentariosRepository
    {
        private readonly AppDataContext _context;
        public ComentarioRepository(AppDataContext context)
        {
            _context = context;
        }
        public void Cadastrar(ComentarioRepository comentario)
        {
            _context.Comentarios.Add(comentario);
            _context.SaveChanges();
        }
        public List<Comentario> ListarPorItem(int id)
        {
            return _context.Comentarios.Include(x => x.Item).Where(x => x.ItemId == id).ToList();
        }
         public async Task<bool> DeleteAsync(int id, int ItemId)
        {
            var comentario = await GetByIdAsync(id, ItemId);
            if (comentario == null) return false;

            _context.Comentarios.Remove(comentario);
            await _context.SaveChangesAsync();
            return true;
    }
    }
}
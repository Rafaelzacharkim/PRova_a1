using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api_avaliacao.Data;
using api_avaliacao.Models;
using api_avaliacao.Data.Interfaces;
namespace api_avaliacao.Controllers
{
    [Route("/comentarios")]
    public class ComentariosController : Controller
    {
        private readonly IComentarioRepository _comentarioRepository;
        private readonly IItemRepository _itemRepository;
        public ComentariosController(IComentariosRepository comentarioRepository)
        {
            _comentarioRepository = comentarioRepository;
        }
        [Authorize]
        [HttpPost("cadastrar")]
        public IActionResult Cadastrar([FromBody] Comentario comentario)
        {
            comentario.Item = _itemRepository.BuscarItemPorId(comentario.ItemId);
            _comentarioRepository.Cadastrar(comentario);
            return Created("", comentario);
        }
        [Authorize]
        [HttpGet("listar/{id}")]
        public IActionResult Listar([FromRoute] int id)
        {
            return Ok(_comentarioRepository.ListarPorItem(id));
        }
        [Authorize]
        [HttpDelete("{id}/{ItemId}")]
        public async Task<IActionResult> Delete([FromRoute]int id, int ItemId)
        {
            var result = await _comentarioRepository.Delete(id, ItemId);
            return result ? NoContent() : NotFound();
        }
    }
}
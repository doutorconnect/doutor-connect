import Link from 'next/link';
import {
  Brain,
  Leaf,
  Sparkles,
  Users,
  ShieldCheck,
  CalendarCheck,
  Heart,
  Frown,
  MessageCircleHeart
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

const trustPoints = [
  { icon: Users, label: 'Profissionais qualificados' },
  { icon: ShieldCheck, label: 'Atendimento seguro e sigiloso' },
  { icon: CalendarCheck, label: 'Agendamento simples e rápido' }
];

const whyCareCards = [
  { icon: Brain, title: 'Mais equilíbrio emocional', desc: 'Lide

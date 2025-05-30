PGDMP                      }            comsulmed_origin    17.4    17.4 :    e           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            f           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            g           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            h           1262    17701    comsulmed_origin    DATABASE     v   CREATE DATABASE comsulmed_origin WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-EC';
     DROP DATABASE comsulmed_origin;
                     eyelesscode    false            �            1259    17716    CentroMedico    TABLE     �   CREATE TABLE public."CentroMedico" (
    codigo integer NOT NULL,
    nombre text NOT NULL,
    direccion text NOT NULL,
    telefono text NOT NULL,
    "RUC" text NOT NULL
);
 "   DROP TABLE public."CentroMedico";
       public         heap r       eyelesscode    false            �            1259    17715    CentroMedico_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."CentroMedico_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."CentroMedico_codigo_seq";
       public               eyelesscode    false    219            i           0    0    CentroMedico_codigo_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."CentroMedico_codigo_seq" OWNED BY public."CentroMedico".codigo;
          public               eyelesscode    false    218            �            1259    17736 	   Enfermera    TABLE     �   CREATE TABLE public."Enfermera" (
    codigo integer NOT NULL,
    cedula text NOT NULL,
    nombres text NOT NULL,
    apellidos text NOT NULL,
    especialidad text NOT NULL
);
    DROP TABLE public."Enfermera";
       public         heap r       eyelesscode    false            �            1259    17735    Enfermera_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."Enfermera_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."Enfermera_codigo_seq";
       public               eyelesscode    false    223            j           0    0    Enfermera_codigo_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Enfermera_codigo_seq" OWNED BY public."Enfermera".codigo;
          public               eyelesscode    false    222            �            1259    17725    Paciente    TABLE     �  CREATE TABLE public."Paciente" (
    codigo integer NOT NULL,
    cedula text NOT NULL,
    nombres text NOT NULL,
    "fechaNacimiento" text NOT NULL,
    apellidos text NOT NULL,
    edad integer NOT NULL,
    genero text NOT NULL,
    telefono text NOT NULL,
    "tipoSangre" text NOT NULL,
    direccion text DEFAULT ''::text,
    correo text NOT NULL,
    ocupacion text DEFAULT 'ninguno'::text
);
    DROP TABLE public."Paciente";
       public         heap r       eyelesscode    false            �            1259    17724    Paciente_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."Paciente_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Paciente_codigo_seq";
       public               eyelesscode    false    221            k           0    0    Paciente_codigo_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Paciente_codigo_seq" OWNED BY public."Paciente".codigo;
          public               eyelesscode    false    220            �            1259    17763    SignosPacientes    TABLE     �   CREATE TABLE public."SignosPacientes" (
    linea integer NOT NULL,
    valor double precision NOT NULL,
    "tipoSignoId" integer NOT NULL,
    "tomaSignosId" integer NOT NULL,
    fecha text NOT NULL,
    comentario text DEFAULT ''::text
);
 %   DROP TABLE public."SignosPacientes";
       public         heap r       eyelesscode    false            �            1259    17762    SignosPacientes_linea_seq    SEQUENCE     �   CREATE SEQUENCE public."SignosPacientes_linea_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."SignosPacientes_linea_seq";
       public               eyelesscode    false    229            l           0    0    SignosPacientes_linea_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."SignosPacientes_linea_seq" OWNED BY public."SignosPacientes".linea;
          public               eyelesscode    false    228            �            1259    17745 	   TipoSigno    TABLE     �   CREATE TABLE public."TipoSigno" (
    codigo integer NOT NULL,
    descripcion text NOT NULL,
    unidad text NOT NULL,
    "valorMinimo" double precision NOT NULL,
    "valorMaximo" double precision NOT NULL
);
    DROP TABLE public."TipoSigno";
       public         heap r       eyelesscode    false            �            1259    17744    TipoSigno_codigo_seq    SEQUENCE     �   CREATE SEQUENCE public."TipoSigno_codigo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."TipoSigno_codigo_seq";
       public               eyelesscode    false    225            m           0    0    TipoSigno_codigo_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."TipoSigno_codigo_seq" OWNED BY public."TipoSigno".codigo;
          public               eyelesscode    false    224            �            1259    17754 
   TomaSignos    TABLE     �   CREATE TABLE public."TomaSignos" (
    numero integer NOT NULL,
    fecha text NOT NULL,
    "centroMedicoId" integer NOT NULL,
    "pacienteId" integer NOT NULL,
    "enfermeraId" integer NOT NULL,
    observacion text NOT NULL
);
     DROP TABLE public."TomaSignos";
       public         heap r       eyelesscode    false            �            1259    17753    TomaSignos_numero_seq    SEQUENCE     �   CREATE SEQUENCE public."TomaSignos_numero_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."TomaSignos_numero_seq";
       public               eyelesscode    false    227            n           0    0    TomaSignos_numero_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."TomaSignos_numero_seq" OWNED BY public."TomaSignos".numero;
          public               eyelesscode    false    226            �            1259    17704    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap r       eyelesscode    false            �           2604    17719    CentroMedico codigo    DEFAULT     ~   ALTER TABLE ONLY public."CentroMedico" ALTER COLUMN codigo SET DEFAULT nextval('public."CentroMedico_codigo_seq"'::regclass);
 D   ALTER TABLE public."CentroMedico" ALTER COLUMN codigo DROP DEFAULT;
       public               eyelesscode    false    219    218    219            �           2604    17739    Enfermera codigo    DEFAULT     x   ALTER TABLE ONLY public."Enfermera" ALTER COLUMN codigo SET DEFAULT nextval('public."Enfermera_codigo_seq"'::regclass);
 A   ALTER TABLE public."Enfermera" ALTER COLUMN codigo DROP DEFAULT;
       public               eyelesscode    false    223    222    223            �           2604    17728    Paciente codigo    DEFAULT     v   ALTER TABLE ONLY public."Paciente" ALTER COLUMN codigo SET DEFAULT nextval('public."Paciente_codigo_seq"'::regclass);
 @   ALTER TABLE public."Paciente" ALTER COLUMN codigo DROP DEFAULT;
       public               eyelesscode    false    220    221    221            �           2604    17766    SignosPacientes linea    DEFAULT     �   ALTER TABLE ONLY public."SignosPacientes" ALTER COLUMN linea SET DEFAULT nextval('public."SignosPacientes_linea_seq"'::regclass);
 F   ALTER TABLE public."SignosPacientes" ALTER COLUMN linea DROP DEFAULT;
       public               eyelesscode    false    229    228    229            �           2604    17748    TipoSigno codigo    DEFAULT     x   ALTER TABLE ONLY public."TipoSigno" ALTER COLUMN codigo SET DEFAULT nextval('public."TipoSigno_codigo_seq"'::regclass);
 A   ALTER TABLE public."TipoSigno" ALTER COLUMN codigo DROP DEFAULT;
       public               eyelesscode    false    225    224    225            �           2604    17757    TomaSignos numero    DEFAULT     z   ALTER TABLE ONLY public."TomaSignos" ALTER COLUMN numero SET DEFAULT nextval('public."TomaSignos_numero_seq"'::regclass);
 B   ALTER TABLE public."TomaSignos" ALTER COLUMN numero DROP DEFAULT;
       public               eyelesscode    false    226    227    227            X          0    17716    CentroMedico 
   TABLE DATA           T   COPY public."CentroMedico" (codigo, nombre, direccion, telefono, "RUC") FROM stdin;
    public               eyelesscode    false    219   J       \          0    17736 	   Enfermera 
   TABLE DATA           W   COPY public."Enfermera" (codigo, cedula, nombres, apellidos, especialidad) FROM stdin;
    public               eyelesscode    false    223   �K       Z          0    17725    Paciente 
   TABLE DATA           �   COPY public."Paciente" (codigo, cedula, nombres, "fechaNacimiento", apellidos, edad, genero, telefono, "tipoSangre", direccion, correo, ocupacion) FROM stdin;
    public               eyelesscode    false    221   �M       b          0    17763    SignosPacientes 
   TABLE DATA           k   COPY public."SignosPacientes" (linea, valor, "tipoSignoId", "tomaSignosId", fecha, comentario) FROM stdin;
    public               eyelesscode    false    229   UQ       ^          0    17745 	   TipoSigno 
   TABLE DATA           `   COPY public."TipoSigno" (codigo, descripcion, unidad, "valorMinimo", "valorMaximo") FROM stdin;
    public               eyelesscode    false    225   �Q       `          0    17754 
   TomaSignos 
   TABLE DATA           q   COPY public."TomaSignos" (numero, fecha, "centroMedicoId", "pacienteId", "enfermeraId", observacion) FROM stdin;
    public               eyelesscode    false    227   fR       V          0    17704    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public               eyelesscode    false    217   �R       o           0    0    CentroMedico_codigo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."CentroMedico_codigo_seq"', 11, true);
          public               eyelesscode    false    218            p           0    0    Enfermera_codigo_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Enfermera_codigo_seq"', 10, true);
          public               eyelesscode    false    222            q           0    0    Paciente_codigo_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Paciente_codigo_seq"', 12, true);
          public               eyelesscode    false    220            r           0    0    SignosPacientes_linea_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."SignosPacientes_linea_seq"', 2, true);
          public               eyelesscode    false    228            s           0    0    TipoSigno_codigo_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."TipoSigno_codigo_seq"', 6, true);
          public               eyelesscode    false    224            t           0    0    TomaSignos_numero_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."TomaSignos_numero_seq"', 1, true);
          public               eyelesscode    false    226            �           2606    17723    CentroMedico CentroMedico_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."CentroMedico"
    ADD CONSTRAINT "CentroMedico_pkey" PRIMARY KEY (codigo);
 L   ALTER TABLE ONLY public."CentroMedico" DROP CONSTRAINT "CentroMedico_pkey";
       public                 eyelesscode    false    219            �           2606    17743    Enfermera Enfermera_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Enfermera"
    ADD CONSTRAINT "Enfermera_pkey" PRIMARY KEY (codigo);
 F   ALTER TABLE ONLY public."Enfermera" DROP CONSTRAINT "Enfermera_pkey";
       public                 eyelesscode    false    223            �           2606    17734    Paciente Paciente_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Paciente"
    ADD CONSTRAINT "Paciente_pkey" PRIMARY KEY (codigo);
 D   ALTER TABLE ONLY public."Paciente" DROP CONSTRAINT "Paciente_pkey";
       public                 eyelesscode    false    221            �           2606    17771 $   SignosPacientes SignosPacientes_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."SignosPacientes"
    ADD CONSTRAINT "SignosPacientes_pkey" PRIMARY KEY (linea);
 R   ALTER TABLE ONLY public."SignosPacientes" DROP CONSTRAINT "SignosPacientes_pkey";
       public                 eyelesscode    false    229            �           2606    17752    TipoSigno TipoSigno_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."TipoSigno"
    ADD CONSTRAINT "TipoSigno_pkey" PRIMARY KEY (codigo);
 F   ALTER TABLE ONLY public."TipoSigno" DROP CONSTRAINT "TipoSigno_pkey";
       public                 eyelesscode    false    225            �           2606    17761    TomaSignos TomaSignos_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."TomaSignos"
    ADD CONSTRAINT "TomaSignos_pkey" PRIMARY KEY (numero);
 H   ALTER TABLE ONLY public."TomaSignos" DROP CONSTRAINT "TomaSignos_pkey";
       public                 eyelesscode    false    227            �           2606    17712 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public                 eyelesscode    false    217            �           1259    17772    CentroMedico_RUC_key    INDEX     Y   CREATE UNIQUE INDEX "CentroMedico_RUC_key" ON public."CentroMedico" USING btree ("RUC");
 *   DROP INDEX public."CentroMedico_RUC_key";
       public                 eyelesscode    false    219            �           1259    17775    Enfermera_cedula_key    INDEX     W   CREATE UNIQUE INDEX "Enfermera_cedula_key" ON public."Enfermera" USING btree (cedula);
 *   DROP INDEX public."Enfermera_cedula_key";
       public                 eyelesscode    false    223            �           1259    17773    Paciente_cedula_key    INDEX     U   CREATE UNIQUE INDEX "Paciente_cedula_key" ON public."Paciente" USING btree (cedula);
 )   DROP INDEX public."Paciente_cedula_key";
       public                 eyelesscode    false    221            �           1259    17774    Paciente_correo_key    INDEX     U   CREATE UNIQUE INDEX "Paciente_correo_key" ON public."Paciente" USING btree (correo);
 )   DROP INDEX public."Paciente_correo_key";
       public                 eyelesscode    false    221            �           2606    17791 0   SignosPacientes SignosPacientes_tipoSignoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."SignosPacientes"
    ADD CONSTRAINT "SignosPacientes_tipoSignoId_fkey" FOREIGN KEY ("tipoSignoId") REFERENCES public."TipoSigno"(codigo) ON UPDATE CASCADE ON DELETE RESTRICT;
 ^   ALTER TABLE ONLY public."SignosPacientes" DROP CONSTRAINT "SignosPacientes_tipoSignoId_fkey";
       public               eyelesscode    false    229    225    4795            �           2606    17796 1   SignosPacientes SignosPacientes_tomaSignosId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."SignosPacientes"
    ADD CONSTRAINT "SignosPacientes_tomaSignosId_fkey" FOREIGN KEY ("tomaSignosId") REFERENCES public."TomaSignos"(numero) ON UPDATE CASCADE ON DELETE RESTRICT;
 _   ALTER TABLE ONLY public."SignosPacientes" DROP CONSTRAINT "SignosPacientes_tomaSignosId_fkey";
       public               eyelesscode    false    227    229    4797            �           2606    17776 )   TomaSignos TomaSignos_centroMedicoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TomaSignos"
    ADD CONSTRAINT "TomaSignos_centroMedicoId_fkey" FOREIGN KEY ("centroMedicoId") REFERENCES public."CentroMedico"(codigo) ON UPDATE CASCADE ON DELETE RESTRICT;
 W   ALTER TABLE ONLY public."TomaSignos" DROP CONSTRAINT "TomaSignos_centroMedicoId_fkey";
       public               eyelesscode    false    4786    219    227            �           2606    17786 &   TomaSignos TomaSignos_enfermeraId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TomaSignos"
    ADD CONSTRAINT "TomaSignos_enfermeraId_fkey" FOREIGN KEY ("enfermeraId") REFERENCES public."Enfermera"(codigo) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."TomaSignos" DROP CONSTRAINT "TomaSignos_enfermeraId_fkey";
       public               eyelesscode    false    223    227    4793            �           2606    17781 %   TomaSignos TomaSignos_pacienteId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TomaSignos"
    ADD CONSTRAINT "TomaSignos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES public."Paciente"(codigo) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."TomaSignos" DROP CONSTRAINT "TomaSignos_pacienteId_fkey";
       public               eyelesscode    false    227    221    4790            X   �  x�]�Mn�0���)� �+���Ru����:5�U7�)Т+J�e�Uw��b�!e�B�~|o�H�ź����Z6ʠ���W�����Jī<+�KJ!�L�I%�����]m��|���O��������2!֪��2�r!�U�:��XSw�k�'� #Q�k���A�Vmߡ!NY�Y�Ld�x$sR�[,<�o��-l	q��Q���7.�vE�i"��bT��lvx�ZE���t�z{ҮG����"#Фi1�dP>��ZU�(7��I.R%cz�_���xYN�4+�q<����������;���5�WǷN{���Qr�7�ƿ���,�KJ�r��6w������X�|e��X��<c��0��b�d��&ͽQ�8��nk}���� U���-:أ9"���m�&L��ބˋ��QA$�4�# |������������nPg���{{]��_ڐ�I�e��EE� Y�\      \   �  x�E�Mn1�לS���/�qj4�������XP3:���/�A+��KA��=�s`�n4�Lg�lQ��#�|�u�<Sg�C���V�̏�PL�©��v��Ϧ�1�(A���J�5���&:��E(��*�M?��svd�vb��i}B�$b�J���͎��n��,v+O5�15>�Gx�jLCf���$5œ�TL�6;����F!_#�R�f�B�|�'\�Y3p��.�Ũ�c`��JF��"؞������]�+���h�K�!���;4ʟ��9��#6�N��`wV����
/��m�?�3f%���7���5�S@S�O}0�YI��V�o��Bl©/�Cԋ�	#6=x>�1��Z��x+_�痢(�˯��      Z   �  x�uT�n�8]_�	�����A�	�i�n�%ƥ�"3�d��7��"�����K�.� 5��$�{tW /�8+�
�;�v�vk�~�C�y�(�"��e-[v�+����u�m�ke,a"�
gp��^Ŷ��wP�W��+�w�ڿC��u��5=��$.N?��//Nnٍ�4f�I�`���6�Y6���Z��E��y����QnB���b��_�T:�ls� &<�1Ox
�=)0G�m�(x��@D�0�ܱ��g#w'�?N�iv\6��[�%N��5������ؼj9r�lV�(�5I�OyJb�u��O�45�<xD),��e��"|�>>��I	(?����^7��L�	4��z<|�࣭:�p�� �Q'I
��g��ݰo��[ 8�ѻ�#���9��8��,�:�,[ƣmQ���6t�b��S�'�Na�W^�\:%����A1��O�e�y�kr"��E��Y^p(g�B�1dך=��᭵��]�"�}Ejt#Υ�����"�B�����L�%���3ޒ<�Iq�%t�6KG���\��h�c2g�d�ʶ�e[6�z�i����߉3���d&9!��;�A6��9� ����f�nx3��Eoh�.��B���!kKL4{������b�)�.����W��:��sJ{�g�dMm\���$+�$��s���Q��!��ɡ'y�ϓ��cJ��dE���1��qA���ْ�1����Z�F�Y�1'T�89<�-��	5��s5~��~uK4j���,��eEp��:t)I�(C���B{K$�±���↺��C�t�=ɻcsZ���~��(gG��4�-�4;��#nh=��ZD�Jp�Ί8O���G�g�[\J�SKM�$ub\�w� 	=I���L~���.�)�˟U%il����R��]a��o�d2��#�h      b   D   x�3�41�4B##S]S]CcΰĜ�"��Լ��| ��P�������_����e�in�iB��=... �2�      ^   �   x�mν
�0���)��j���� ���.�4�@~�m
�TA��3fRp<�qΑp3~4�i&�:�	��Gh:hSp!3ټ��Yt|�Sʫ���� ���C{��v/
g-����m�*R�,�a�y>H
��oU�G[~��%T((��p��u�����&D��o��e��6�O/      `      x�3�4202�50�54�4�a�=... 3��      V   �   x�m��	�0�Vi@f���E�CXK+�5I���9�N3���!h��[��V���1�c���8؇�ڸQ�I,�Z�V�R�EL2��� 't���fЌ|ؔ7��6j*'�YPdPe��|�ޟe�_��yîӾ����e-�     